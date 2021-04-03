import React from 'react'
import about from "../img/about.jpg";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="aboutme"/>
            </div>

            <div className="about-info">
                <h4>I am a <span>Full-stack Developer</span></h4>
                <div className="about-text">
                    <p>
                    A full-stack developer with a flair for creating elegant solutions in the least amount of time. If you can imagine it, let's build it.
                    </p>
                </div>
                <div className="about-details">
                    <div className="left-section">
                            <p>Full Name</p>
                            <p>Qualification</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                            <p>State</p>
                        </div>
                        <div className="right-section">
                            <p>: Pamela Ahiante</p>
                            <p>: BSc in Public Administration</p> 
                            <p>: Nigerian</p>  
                            <p>: English</p>
                            <p>: Ajah, Lagos</p>
                            <p>: Edo state</p>
                        </div>
                </div>
                <button className="btn"><a href="http//:/Users/USER/Downloads/AHIANTE-PAMELA(Developer).pdf">Download Cv</a></button>
                
            </div>
        </div>
    )
}

export default ImageSection
