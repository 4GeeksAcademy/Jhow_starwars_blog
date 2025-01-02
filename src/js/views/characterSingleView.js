import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterSingleView = () => {
    const { store, actions } = useContext(Context);
    const { characterId } = useParams();

    useEffect(() => {
        actions.getCharacterDetail(characterId);
    }, []);

    console.log(store.characterDetail);

    return (
        <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
            {!store.characterDetail ? (
                <h1>"Cargando personaje..."</h1>
            ) : (
                <div>
                    {/* Contenedor para la imagen centrada */}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
                            onError={(error) => {
                                error.target.onerror = null;
                                error.target.src =
                                    "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg";
                            }}
                            style={{
                                width: "400px", // Tamaño de la imagen 400px de ancho
                                height: "400px", // Tamaño de la imagen 400px de alto
                                objectFit: "cover", // Asegura que la imagen se recorte adecuadamente
                            }}
                        />
                    </div>

                    {/* Características del personaje alineadas a la izquierda */}
                    <div>
                        <h1>{store.characterDetail.name}</h1>

                        <ul style={{ textAlign: "left" }}>
                            <li>
                                <strong>Birth date or Creation Date: </strong> {store.characterDetail.birth_year}
                            </li>
                            <li>
                                <strong>Gender: </strong> {store.characterDetail.gender}
                            </li>
                            <li>
                                <strong>Eye Color: </strong> {store.characterDetail.eye_color}
                            </li>
                            <li>
                                <strong>Hair Color: </strong> {store.characterDetail.hair_color}
                            </li>
                            <li>
                                <strong>Height: </strong> {store.characterDetail.height}
                            </li>
                            <li>
                                <strong>Skin Color: </strong> {store.characterDetail.skin_color}
                            </li>
                            <li>
                                <strong>Created: </strong> {store.characterDetail.created}
                            </li>
                            <li>
                                <strong>Edited: </strong> {store.characterDetail.edited}
                            </li>
                            <li>
                                <strong>HomeWorld: </strong> {store.characterDetail.homeworld}
                            </li>
                            <li>
                                <strong>Mass: </strong> {store.characterDetail.mass}
                            </li>
                            <li>
                                <strong>Url: </strong> {store.characterDetail.url}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export { CharacterSingleView };
