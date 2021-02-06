import React from "react";
import "./style.css";

const Resume = ({ data }) => {
  const skills = data.skills.map(function (skills) {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });
  return (
    <section id="resume">
      <div className="resume-items">
        <div className="resume-item">
          <div className="resume-item-title">
            <h1>Work</h1>
          </div>
          <div className="resume-item-main-col">
            <h3>Wipro Digital</h3>
            <div className="light-para">
              <p>
                <i>Full Stack Developer</i> | Jun 2016 - Present
              </p>
            </div>
            <div className="light-para">
              <p>
                An enthusiastic full-stack developer with 4.6+ years of hands-on experience in
                designing, developing, and deploying intuitive digital applications for customers
                with expertise in front-end, back-end technologies, containerization, and deployment
                of the solutions.
              </p>
            </div>
            {/* <div className="bars">
                  <div>
                  <ul className="skills">{skills.slice(0,data.skills.length/2)}</ul>
                  </div>
                  <div>
                  <ul className="skills">{skills.slice(data.skills.length/2)}</ul>
                  </div> */}
            {/* </div> */}
          </div>
        </div>

        <div className="resume-item">
          <div className="resume-item-title">
            <h1>Skills </h1>
          </div>
          <div className="resume-item-main-col">
            <div className="light-para">
              <p>My Programming Language Proficiency</p>
            </div>
            <div className="bars">
              <div>
                <ul className="skills">{skills.slice(0, data.skills.length / 2)}</ul>
              </div>
              <div>
                <ul className="skills">{skills.slice(data.skills.length / 2)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
