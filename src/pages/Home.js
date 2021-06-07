import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import Typed from "react-typed";

function Home() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          <Typed 
            strings={["Hi, I am", "Pamela Ahiante", "Fullstack developer", "Web designer"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        
        </h1>
        <p className="h-sub-text">
          A Software developer with a flair for creating elegant solutions in
          the least amount of time. If you can imagine it, let's build it.
        </p>
        <div className="icons">
          <a
            href="https://github.com/pamtel"
            target="blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/pamela-ahiante-2055091b1/"
            target="blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a
            href="https://www.instagram.com/official_pamtel/"
            target="blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagramSquare} className="icon ig" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;
