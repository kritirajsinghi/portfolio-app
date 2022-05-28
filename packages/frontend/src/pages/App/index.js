import React, { useState } from "react";

import logo from "assets/images/logo.png";
import Navbar from "components/Navbar";
import Home from "components/Home";
import SideDrawer from "components/SideDrawer";
import About from "components/About";
import Resume from "components/Resume";
import Footer from "components/Footer";
import Contact from "components/Contact";

import data from "content/data.json";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="portfolio-app">
      <Navbar
        click={() => setSideToggle(!sideToggle)}
        logo={logo}
        logoAlt="KRS"
        menuItem="Contact Me"
        data={data.nav}
      />
      <SideDrawer show={sideToggle} data={data.nav} click={() => setSideToggle(!sideToggle)} />
      <Home />
      <About data={data.about} />
      <Resume resume={data.resume} skills={data.skills} />
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </div>
  );
};
export default App;
