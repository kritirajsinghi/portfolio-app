import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import "./style.scss";

const Navbar = ({ logo, logoAlt, data, click }) => {
  return (
    <header>
      <nav className="navbar is-transparent" role="navigation">
         {/* ----------------Navbar logo brand block---------------- */}
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className="navbar-img" src={logo} alt={logoAlt} />
          </a>
        </div>
       {/* ----------------Navbar logo menu---------------- */}
        <ul className="navbar-menu">
          {data.menuItems.map((item, i) => (
            <li key={i} className={i == 0 ? "selected" : ""}>
              <Link
                className="nav-menu-item"
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* ----------------Only for small screen devices---------------- */}
        <div className="hamburger-menu" role="presentation" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
  logo: undefined,
  alt: "BRAND",
  menuItem: "menu1",
};
Navbar.propTypes = {
  logo: PropTypes.node,
  alt: PropTypes.string.isRequired,
  menuItem: PropTypes.string,
};
export default Navbar;
