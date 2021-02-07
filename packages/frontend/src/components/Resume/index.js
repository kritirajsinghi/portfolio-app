import React from "react";
import "./style.css";

const Resume = ({ data }) => {
  /* ----------------- Map Skills to list of items ----------------- */
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
            <h3>{data.company}</h3>
            <div className="light-para">
              <p>
                <i>{data.title}&nbsp;&nbsp; </i> |&nbsp;&nbsp; {data.time}
              </p>
            </div>
            <div className="light-para">
              <p>
               {data.intro}
              </p>
            </div>
          </div>
        </div>
        
        <div className="resume-item">
          <div className="resume-item-title">
            <h1>Skills </h1>
          </div>
          <div className="resume-item-main-col">
            <div className="light-para">
              <p>{data.skillsIntro}</p>
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
