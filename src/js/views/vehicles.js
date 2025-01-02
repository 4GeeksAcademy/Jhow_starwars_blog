import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllVehicles();
    }, []);

    return (
        <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
            <h1 style={{ textAlign: "center", color: "white" }}>VEHICLES</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {store.vehicles.map((vehicle, index) => {
                    return (
                        <div key={index} style={{ margin: "20px", maxWidth: "540px", maxHeight: "300px" }}>
                            <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "8px" }}>
                                {/* Imagen del vehículo */}
                                <div>
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                        alt={vehicle.name}
                                        style={{ width: "100%", height: "auto", maxWidth: "250px", objectFit: "cover" }}
                                        onError={(error) => {
                                            error.target.onerror = null;
                                            error.target.src =
                                                "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg";
                                        }}
                                    />
                                </div>
                                <div style={{ marginTop: "10px", textAlign: "center" }}>
                                    {/* Icono de favoritos */}
                                    <FaRegHeart
                                        onClick={() => actions.addFavorites(vehicle.name)}
                                        style={{ cursor: "pointer", color: "white", marginRight: "10px" }}
                                    />
                                    <div>
                                        {/* Nombre del vehículo */}
                                        <h5>{vehicle.name}</h5>
                                    </div>
                                    {/* Enlace a los detalles */}
                                    <Link to={`/vehicleSingleView/${vehicle.uid}`}>
                                        <button
                                            style={{
                                                padding: "10px",
                                                backgroundColor: "white",
                                                color: "black",
                                                border: "none",
                                                cursor: "pointer",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            Details Here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export { Vehicles };
