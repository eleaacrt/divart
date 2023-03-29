import React from 'react';
import { useForm } from "react-hook-form";


export const Connexion = ({setUser, user, className}) => {
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
            fetch("https://divartapi.noamsebahoun.fr/controller.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data.status);
                    console.log("user :" + user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        return (
            <>
                <div className="paragraphe-form">
                    <p>
                        Vous devez être connecté pour accéder à la liste des réservations.</p>
                    <p>Veuillez entrer l'<span className="playfair">identifiant</span> et le <span className="playfair">mot de passe</span> fournis par l'administrateur.
                    </p>
                </div>
                <form 
                className={
                    user === 0 ? (
                        "mdp-error"
                    ) : (
                        className
                    )
                } 
                onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="pseudo">Identifiant</label>
                        <input id="pseudo" {...register("pseudo")} type="text" placeholder="Pseudo" required />
                    </div>
                    <div>
                        <label htmlFor="mdp">Mot de passe</label>
                        <input id="mdp" {...register("mdp")} type="password" placeholder="Mot de passe" required />
                    </div>
                    {
                        user === 0 ? (
                            <p className="error">Identifiant ou mot de passe <span className="playfair">incorrect</span></p>
                        ) : (
                            console.log("ok")
                        )
                    }
                    <button
                        type="submit"
                        name="connexion">
                        Connexion
                    </button>
                </form>
            </>
        )
    };
