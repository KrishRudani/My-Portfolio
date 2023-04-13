import Model from "./Model";
import { MantineProvider } from '@mantine/core';
import Modelskill from "./Modelskill";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div>
              <div >
                <div style={{height: "540px"}}>
                <MantineProvider
                >
                <Model />
                </MantineProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Front-end Developer with over months of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} from Surat Gujarat. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences.
                </p>
                <div className="row">
                  <div className="col-auto">
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated"  id="skills"/>
        <div className="title">
          <h3 >Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-7 m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Front-end Developer. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>C / C++</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Html / CSS / JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Three.Js (Learning) </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "15%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{height: "500px" , width: "330px" , marginLeft: "90px" , marginTop: "-100px"}} >
              <Modelskill />
            </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default About;
