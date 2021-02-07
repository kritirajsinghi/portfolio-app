import React from "react";
import { animateScroll } from "react-scroll";

import "./style.css";

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a rel="noreferrer" target="_blank" href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="footer-block">
        <div className="social-items">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by <a href="https://kriti-raj-profile.herokuapp.com/">KRS</a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <button
            className="smoothscroll"
            title="Back to Top"
            onClick={() => animateScroll.scrollToTop()}
          >
            <i className="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
