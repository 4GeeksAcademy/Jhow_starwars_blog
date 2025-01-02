import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getPlanets();
    actions.getCharacters();
    actions.getAllVehicles();
  }, []);

  useEffect(() => {
    console.log(store.characters);
  }, [store.characters]);

  useEffect(() => {
    console.log(store.vehicles);
  }, [store.vehicles]);

  return (
    <div className="wrapper" style={{ backgroundColor: "black", color: "white" }}>
      <h1> Blog de StarWars</h1>

      <div className="card-list-container row">
        <h3>Planets</h3>
        {/* Planets layout horizontal */}
        <div className="card-list d-flex overflow-auto">
          {store.planets.map((planet, index) => (
            <div
              className="card-item d-flex-shrink-0"
              key={index}
              onClick={() => navigate(`/planetSingleView/${planet.uid}`)}
              style={{
                width: "200px", // Ajuste de tamaño a 200px
                height: "300px", // Ajuste de tamaño a 300px
                marginRight: "10px",
              }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                className="card-img text-white"
                onError={(error) => {
                  error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
                }}
                style={{
                  width: "200px", // Ajuste de tamaño a 200px
                  height: "200px", // Ajuste de tamaño a 200px
                  objectFit: "cover", // Asegura que la imagen no se deforme
                  marginBottom: "10px",
                }}
              />
              <div className="card-content">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-description">{planet.uid}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/planets"
          data-mdb-tab-init
          className="nav-link linkTexts"
          id="ex3-tab-2"
          href="#ex3-tabs-2"
          role="tab"
          aria-controls="ex3-tabs-2"
          aria-selected="false"
        >
          <button className="btnSeeMore">All planets</button>
        </Link>
      </div>

      <div className="card-list-container row">
        <h3>Characters</h3>
        {/* Characters layout horizontal */}
        <div className="card-list d-flex overflow-auto">
          {store.characters.map((character, index) => (
            <div
              className="card-item d-flex-shrink-0"
              key={index}
              onClick={() => navigate(`/characterSingleView/${character.uid}`)}
              style={{
                width: "200px", // Ajuste de tamaño a 200px
                height: "300px", // Ajuste de tamaño a 300px
                marginRight: "10px",
              }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                className="card-img2 text-white"
                onError={(error) => {
                  error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
                }}
                style={{
                  width: "200px", // Ajuste de tamaño a 200px
                  height: "200px", // Ajuste de tamaño a 200px
                  objectFit: "cover", // Asegura que la imagen no se deforme
                  marginBottom: "10px",
                }}
              />
              <div className="card-content">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-description">{character.uid}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/characters"
          data-mdb-tab-init
          className="nav-link linkTexts"
          id="ex3-tab-2"
          href="#ex3-tabs-2"
          role="tab"
          aria-controls="ex3-tabs-2"
          aria-selected="false"
        >
          <button className="btnSeeMore">All characters</button>
        </Link>
      </div>

      <div className="card-list-container row">
        <h3>Vehicles</h3>
        {/* Vehicles layout horizontal */}
        <div className="card-list d-flex overflow-auto">
          {store.vehicles.slice(0, 10).map((vehicle, index) => (  // Muestra solo los primeros 10 vehículos
            <div
              className="card-item d-flex-shrink-0"
              key={index}
              onClick={() => navigate(`/vehicleSingleView/${vehicle.uid}`)}
              style={{
                width: "200px", // Ajuste de tamaño a 200px
                height: "300px", // Ajuste de tamaño a 300px
                marginRight: "10px",
              }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                className="card-img2 text-white"
                onError={(error) => {
                  error.target.onerror = null; // Evitar bucle infinito si la imagen alternativa falla también
                }}
                style={{
                  width: "200px", // Ajuste de tamaño a 200px
                  height: "200px", // Ajuste de tamaño a 200px
                  objectFit: "cover", // Asegura que la imagen no se deforme
                  marginBottom: "10px",
                }}
              />
              <div className="card-content">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-description">{vehicle.uid}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/vehicles"
          data-mdb-tab-init
          className="nav-link linkTexts"
          id="ex3-tab-2"
          href="#ex3-tabs-2"
          role="tab"
          aria-controls="ex3-tabs-2"
          aria-selected="false"
        >
          <button className="btnSeeMore">All vehicles</button>
        </Link>
      </div>
    </div>
  );
};
