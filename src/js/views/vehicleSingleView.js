import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const VehicleSingleView = () => {
    const { store, actions } = useContext(Context);
    const { vehicleId } = useParams();

    useEffect(() => {
        actions.getVehicleDetail(vehicleId);
    }, []);

    console.log(store.vehicleDetail);

    return (
        <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "black", color: "white" }}>
            {!store.vehicleDetail ? (
                <h1>Loading vehicle...</h1>
            ) : (
                <div>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        {/* Imagen centrada y con tamaño 400x400 */}
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`}
                            onError={(error) => {
                                error.target.onerror = null;
                                error.target.src = "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg";
                            }}
                            alt={store.vehicleDetail.name}
                            style={{
                                width: "400px", 
                                height: "400px", 
                                objectFit: "cover"
                            }} 
                        />
                    </div>
                    <div>
                        <h1>{store.vehicleDetail.name}</h1>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                                <strong>Model: </strong>{store.vehicleDetail.model}
                            </li>
                            <li>
                                <strong>Vehicle Class: </strong>{store.vehicleDetail.vehicle_class}
                            </li>
                            <li>
                                <strong>Manufacturer: </strong>{store.vehicleDetail.manufacturer}
                            </li>
                            <li>
                                <strong>Cost in Credits: </strong>{store.vehicleDetail.cost_in_credits}
                            </li>
                            <li>
                                <strong>Length: </strong>{store.vehicleDetail.length}
                            </li>
                            <li>
                                <strong>Crew: </strong>{store.vehicleDetail.crew}
                            </li>
                            <li>
                                <strong>Passengers: </strong>{store.vehicleDetail.passengers}
                            </li>
                            <li>
                                <strong>Max Atmospheric Speed: </strong>{store.vehicleDetail.max_atmosphering_speed}
                            </li>
                            <li>
                                <strong>Cargo Capacity: </strong>{store.vehicleDetail.cargo_capacity}
                            </li>
                            <li>
                                <strong>Consumables: </strong>{store.vehicleDetail.consumables}
                            </li>
                            <li>
                                <strong>URL: </strong>{store.vehicleDetail.url}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export { VehicleSingleView };
