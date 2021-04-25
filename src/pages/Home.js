import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="HomePage"> 
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Pamela Ahiante </span>
                </h1>
                <p className="h-sub-text">
                 A full-stack developer with a flair for creating elegant solutions in the least amount of time. If you can imagine it, let's build it.</p>
                    <div className="icons">
                        <Link to="https://www.facebook.com/"className="icon-holder">
                            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                        </Link>
                        <Link to="https://github.com/pamtel"className="icon-holder">
                            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </Link>
                        <Link to="test" className="icon-holder">
                            <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                        </Link>
                        <Link to="test" className="icon-holder">
                            <FontAwesomeIcon icon={faInstagramSquare} className="icon ig"/>
                        </Link>
                    </div>
            </header>
        </div>
    )
}

export default Home
