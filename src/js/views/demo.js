import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <ul>
                {store.demo.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={"/single/" + index}>
                                <span>Link to: {item.title}</span>
                            </Link>
                            {item.background === "orange" ? (
                                <p>{`Check store/flux.js scroll to the actions to see the code`}</p>
                            ) : null}
                            <button onClick={() => actions.changeColor(index, "orange")}>
                                Change Color
                            </button>
                        </li>
                    );
                })}
            </ul>
            <br />
            <Link to="/">
                <button>Back home</button>
            </Link>
        </div>
    );
};
