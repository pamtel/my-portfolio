import { useEffect } from "react";
import about from "../img/about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function ImageSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="ImageSection">
      <div className="img" data-aos="zoom-in">
        <img src={about} alt="aboutme" />
      </div>

      <div className="about-info">
        <h4>
          I am a <span>Software Developer</span>
        </h4>
        <div className="about-text">
          <p>
            A full-stack developer with a flair for creating elegant solutions
            in the least amount of time. If you can imagine it, let's build it.
          </p>
        </div>
        <div className="about-details">
          <div className="left-section">
            <p>
              Full Name <span>: Pamela Ahiante</span>
            </p>
            <p>
              Qualification <span>: BSc in Public Administration</span>
            </p>
            <p>
              Nationality <span>: Nigerian</span>
            </p>
            <p>
              Language <span>: English</span>
            </p>
            <p>
              Address <span>: Lekki-Ajah, Lagos</span>
            </p>
            <p>
              State <span>: Edo state</span>
            </p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/14bdOWwdENRABVtAtn0ZOSsuWEz3DmJ2J/view?usp=sharing"
          target="blank"
          className="text-decoration-none"
        >
          <button className="btn">Download Cv</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
