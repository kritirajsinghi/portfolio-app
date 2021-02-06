import React from "react";
import "./style.css";
import profile from "assets/images/profile.png";
import resume from "assets/kriticv.pdf";
import Button from "components/Button";
const About = () => {
  const resumeDownload = () => {
    window.open(resume, "_blank");
  };
  return (
    <section id="about">
      <div className="about-row">
        <div className="avatar-column">
          <img className="profile-image" src={profile} alt="KRS" />
        </div>
        <div className="about-column">
          <div className="description-block">
            <h3>About Me</h3>
            <p>
              Hi there! I am Kriti Raj! I am working as a Full Stack developer with more than 4.6
              years of experience. I&apos;ve worked around multiple projects designing, building and
              deploying applications from dev to production environment.I have experience working in
              multiple domains like AI, Finance and HR. With this I bring extensive experience in
              Web Development technologies and also with shipping the build to production.
            </p>
            <p>
              Apart from developing web applications and coding, i like to play cricket, listen to
              music and go for parties.
            </p>
          </div>
          <div className="contact-details-block">
            <div>
              <h3>Contact Details</h3>
              <p className="">
                <span>Kriti Raj Singhi</span>
                <br />
                <span>
                  Leeds, UK
                  <br />
                </span>
                <span>+44-(0)-7459034648</span>
                <br />
                <span>kritirajsinghi@gmail.com</span>
              </p>
            </div>
            <div>
              <Button
                className="button is-primary is-filled"
                text="Download Resume"
                onClick={resumeDownload}
                icon="fa fa-download"
              >
                <i className=""></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
