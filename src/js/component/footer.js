import React, { Component } from "react";

export const Footer = () => (
  <footer
    className="footer mt-auto py-3 text-center"
    style={{ backgroundColor: "black", color: "white" }}
  >
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a
        href="http://www.4geeksacademy.com"
        style={{ color: "white", textDecoration: "none" }}
      >
        4Geeks Academy
      </a>
    </p>
  </footer>
);
