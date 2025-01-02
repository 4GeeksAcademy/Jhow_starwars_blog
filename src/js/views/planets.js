import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Planets = () => {
    const { store, actions } = useContext(Context);
    const [planetsGens, setPlanetsGens] = useState([]);

    useEffect(() => {
        actions.getAllPlanets();
    }, []);

    return (
        <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
            <h1 style={{ textAlign: "center", color: "white" }}>Planets</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
                {store.planets.map((planet, index) => {
                    return (
                        <div key={index} style={{ margin: "20px", maxWidth: "300px", textAlign: "center", backgroundColor: "#333", padding: "20px", borderRadius: "8px" }}>
                            <div>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                    alt={planet.name}
                                    style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                                    onError={(error) => {
                                        error.target.onerror = null;
                                        error.target.src =
                                            "https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg";
                                    }}
                                />
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <FaRegHeart
                                    onClick={() => actions.addFavorites(planet.name)}
                                    style={{ cursor: "pointer", color: "red", fontSize: "24px" }}
                                />
                                <h5>{planet.name}</h5>
                                <Link to={`/planetSingleView/${planet.uid}`}>
                                    <button
                                        style={{
                                            padding: "10px",
                                            backgroundColor: "white",
                                            color: "black",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            fontSize: "16px"
                                        }}
                                    >
                                        Details Here
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { Planets };
