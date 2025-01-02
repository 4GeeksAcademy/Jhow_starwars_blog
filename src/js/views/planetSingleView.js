import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetSingleView = () => {
    const { store, actions } = useContext(Context);
    const { planetId } = useParams();

    useEffect(() => {
        actions.getPlanetDetail(planetId);
        console.log(store.planetDetail);
    }, []);

    console.log(store.planetDetail);

    return (
        <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
            {!store.planetDetail ? (
                <h1>"Cargando planeta..."</h1>
            ) : (
                <div>
                    {/* Contenedor para la imagen centrada */}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
                            onError={(error) => {
                                error.target.onerror = null;
                                error.target.src =
                                    "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg";
                            }}
                            style={{
                                width: "400px", // Ajuste de tamaño a 400px de ancho
                                height: "400px", // Ajuste de tamaño a 400px de alto
                                objectFit: "cover", // Asegura que la imagen se recorte adecuadamente
                            }}
                        />
                    </div>

                    {/* Características del planeta alineadas a la izquierda */}
                    <div>
                        <h1>{store.planetDetail.name}</h1>

                        <ul style={{ textAlign: "left" }}>
                            <li>
                                <strong>Climate: </strong> {store.planetDetail.climate}
                            </li>
                            <li>
                                <strong>Created: </strong> {store.planetDetail.created}
                            </li>
                            <li>
                                <strong>Diameter: </strong> {store.planetDetail.diameter}
                            </li>
                            <li>
                                <strong>Edited: </strong> {store.planetDetail.edited}
                            </li>
                            <li>
                                <strong>Gravity: </strong> {store.planetDetail.gravity}
                            </li>
                            <li>
                                <strong>Orbital Period: </strong> {store.planetDetail.orbital_period}
                            </li>
                            <li>
                                <strong>Population: </strong> {store.planetDetail.population}
                            </li>
                            <li>
                                <strong>Rotation Period: </strong> {store.planetDetail.rotation_period}
                            </li>
                            <li>
                                <strong>Water Surface: </strong> {store.planetDetail.surface_water}
                            </li>
                            <li>
                                <strong>Terrain: </strong> {store.planetDetail.terrain}
                            </li>
                            <li>
                                <strong>Url: </strong> {store.planetDetail.url}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export { PlanetSingleView };
