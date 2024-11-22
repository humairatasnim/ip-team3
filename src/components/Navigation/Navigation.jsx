import React from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.scss"

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/facebook-post">Facebook Post</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/facebook-friend-request">Facebook Friend Request</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/whatsapp">WhatsApp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
