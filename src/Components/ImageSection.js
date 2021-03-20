import React from 'react'
import about from "../img/about.jpg";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="image"/>
            </div>

            <div className="about-info">
                <h4>I am <span>Lorem ipsum</span></h4>
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, tempora? Similique nisi quia quod odit
                    </p>
                </div>
                <div className="about-details">
                    <div className="left-section">
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                            <p>State</p>
                        </div>
                        <div className="right-section">
                            <p>: Lorem Ipsum</p>
                            <p>: 50</p>
                            <p>: French</p>  
                            <p>: French, Spanish, English</p>
                            <p>: France, Spain, Germany</p>
                            <p>: Edo state</p>
                        </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection
