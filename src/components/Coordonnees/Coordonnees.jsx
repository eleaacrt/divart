import { Button } from "../Button/Button";
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg'
export const Coordonnees = ({ coordonnees, onClick }) => {

    console.log(coordonnees);

    return (
        <>
            <input type="text" id="myInput" onkeyup="filterBackoffice()" placeholder="Rechercher par titre"></input>
            <table className="myTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date</th>
                        <th>Horaire</th>
                        <th>Mail</th>
                        <th>Amount</th>
                        <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                    {coordonnees && coordonnees.map((coordonnee) => (
                        <tr key={coordonnee.id}>
                            <td>{coordonnee.id}</td>
                            <td>{coordonnee.nom}</td>
                            <td>{coordonnee.prenom}</td>
                            <td>{coordonnee.date}</td>
                            <td>{coordonnee.horaire}</td>
                            <td>{coordonnee.mail}</td>
                            <td>{coordonnee.amount}</td>
                            <td>
                                <Button
                                    variant="delete"
                                    id={coordonnee.id}
                                    onClick={() => {
                                        fetch(`https://divartapi.noamsebahoun.fr/controller.php?id=` + coordonnee.id, {
                                            method: "DELETE",
                                        })
                                            .then((res) => res.json())
                                            .then((data) => {
                                                console.log(data);
                                                onClick(coordonnee.id);
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }}
                                >
                                    <DeleteIcon />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p id="erreurback">&#128546; Oops, aucun article ne semble correspondre à votre recherche.</p>
        </>
    );

};