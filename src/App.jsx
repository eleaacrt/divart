import { Coordonnees } from "./components/Coordonnees/Coordonnees";
import { Connexion } from "./components/Connexion/Connexion";
import { Stats } from "./components/Stats/Stats";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  // https://divartapi.noamsebahoun.fr/controller.php
  // http://localhost/htdocs/api-divart/controller.php
  const [coordonnees, setCoordonnees] = useState([]);
  const [user, setUser] = useState(null);
  const className = "connexion";

  useEffect(() => {
    fetch("https://divartapi.noamsebahoun.fr/controller.php", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCoordonnees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    setCoordonnees((prevState) => prevState.filter((coordonnee) => coordonnee.id !== id));
  };

  return (
    <>
      <header>
        <nav class="navbar">
          <div class="logo">
            <a href="../index.html">←  Retour au site de l'exposition</a>
          </div>
        </nav>
      </header>
      <main>
        {
          user !== 1 ? (
            <Connexion
              className={className}
              setUser={setUser}
              user={user}
            />
          ) : (
            user === 1 ? (
              <>
                <h1>Réservations</h1>
                <Stats
                  reservations={coordonnees}
                />
                <Coordonnees
                  coordonnees={coordonnees}
                  onClick={handleDelete}
                />
              </>
            ) : (
              console.log("error")
            )
          )
        }
      </main>
    </>
  );
};

export default App;