import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { characterId } = useParams();
  const navigate = useNavigate();

  const favsCount = store.favorites.length;

  return (
    <nav style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container-fluid">
        {/* Navbar Top Section */}
        <div className="d-flex justify-content-between align-items-center">
          {/* Social Icons */}
          <div className="social-icons d-flex">
            <ul className="list-unstyled d-flex m-0">
              <li className="me-3">
                <a href="#" style={{ color: 'white' }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" style={{ color: 'white' }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" style={{ color: 'white' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" style={{ color: 'white' }}>
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" style={{ color: 'white' }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Star Wars Blog Title */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <h2>Star Wars Blog</h2>
            </Link>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="favorites">
          <i className="btn dropdown-toggle" style={{ color: 'white' }}>
            Favorites: {favsCount}
          </i>
          <div>
            <strong>Favoritos:</strong>
            <ul>
              {store.favorites.map((favorite, index) => (
                <li key={index} style={{ color: 'white' }}>
                  {favorite}
                  <RiDeleteBin6Fill
                    onClick={() => actions.deleteFavorite(index)}
                    style={{
                      cursor: 'pointer',
                      marginLeft: '10px',
                      color: 'white',
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar Links as divs instead of list */}
      <div className="navbar-links d-flex justify-content-center p-0 m-0" style={{ backgroundColor: 'black' }}>
        <div className="nav-item me-3">
          <Link to="/characters" className="nav-link" style={{ color: 'white' }}>
            CHARACTERS
          </Link>
        </div>
        <div className="nav-item me-3">
          <Link to="/planets" className="nav-link" style={{ color: 'white' }}>
            PLANETS
          </Link>
        </div>
        <div className="nav-item me-3">
          <Link to="/vehicles" className="nav-link" style={{ color: 'white' }}>
            VEHICLES
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
