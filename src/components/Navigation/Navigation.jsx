import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <header className="ip-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link to="/" className="navbar-brand">
                Scripters6
              </Link>
              <button className="navbar-toggler">
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
              </button>

              <div className="navbar-collapse">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link to="/" className="ip-menu-scroll">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="ip-menu-scroll" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="ip-menu-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#"> Demo </a>
                    <ul className="ip-submenu">
                      <li className="ip-submenu-item">
                        <Link to="/facebook-post" className="ip-submenu-link">
                          Facebook Posts
                        </Link>
                      </li>
                      <li className="ip-submenu-item">
                        <Link
                          to="/facebook-message"
                          className="ip-submenu-link"
                        >
                          Facebook Message
                        </Link>
                      </li>
                      <li className="ip-submenu-item">
                        <Link to="/whatsapp" className="ip-submenu-link">
                          WhatsApp
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
