import React from 'react'
import about from "../img/about.jpg";
import { Link } from "react-router-dom";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="aboutme"/>
            </div>

            <div className="about-info">
                <h4>I am a <span>Software Developer</span></h4>
                <div className="about-text">
                    <p>
                    A full-stack developer with a flair for creating elegant solutions in the least amount of time. If you can imagine it, let's build it.
                    </p>
                </div>
                <div className="about-details">
                    <div className="left-section">
                            <p>Full Name <span>: Pamela Ahiante</span></p>
                            <p>Qualification <span>: BSc in Public Administration</span></p>
                            <p>Nationality <span>: Nigerian</span></p>
                            <p>Languages <span>: English</span></p>
                            <p>Address <span>: Ajah, Lagos</span></p>
                            <p>State <span>: Edo state</span></p>
                        </div>
                </div>
                <Link to="http//:/Users/USER/Downloads/AHIANTE-PAMELA(Developer).pdf" className="text-decoration-none">
                    <button className="btn">Download Cv</button>
                </Link>
            </div>
        </div>
    )
}

export default ImageSection
