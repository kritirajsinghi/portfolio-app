import React from "react";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
import Button from "../Button";
import "./style.css";
import { Link, scroller } from "react-scroll";

const Home = ({ ref }) => {
  return (
    <section id="home">
      <div className="banner" ref={ref}>
        <Particles style={{ position: "absolute" }} />
        <div className="banner-text">
          <h1 className="responsive-headline">
            <Typewriter
              options={{
                strings: [`I'm Kriti Raj Singhi.`],
                autoStart: true,
                pauseFor: "100000000",
              }}
            />
          </h1>
          <h3>
            Full Stack Developer @ Goldman Sachs.<span> Based in Birmingham, UK.</span> <br />I
            Design, Build &amp; Deploy Fast, Responsive, Intuitive, Dynamic Web App&apos;s .
          </h3>
          <hr />
          <div className="banner-know-more">
            <Button
              className="button is-primary is-filled"
              text="Know More About Me"
              onClick={() =>
                scroller.scrollTo("about", {
                  smooth: true,
                  offset: -50,
                  duration: 500,
                })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
