import React, { useEffect } from "react";
import Button from "components/Button";
import PropTypes from "prop-types";
import "./style.scss";
import pdf from "assets/kriticv.pdf";
import { Link } from "react-scroll";
const Navbar = ({ logo, logoAlt, data, click }) => {
  useEffect(() => {
    console.log(document.querySelector("section"));
  }, null);
  const navItemClick = (item) => {
    if (item.download) {
      window.open(pdf, "_blank");
    }
  };
  return (
    <header>
      <nav className="navbar is-transparent" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className="navbar-img" src={logo} alt={logoAlt} />
          </a>
        </div>

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
