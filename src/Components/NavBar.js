import React from 'react'
import avatar from '../img/pamela1.png'
import { NavLink } from "react-router-dom";

function NavBar({navClick}) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="profie"/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item" onClick={navClick}>
                        <NavLink to='/' exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item" onClick={navClick}>
                        <NavLink to='/about' activeClassName="active">
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item" onClick={navClick}>
                        <NavLink to='/skills' activeClassName="active">
                            Skills
                        </NavLink>
                    </li>

                    <li className="nav-item" onClick={navClick}>
                        <NavLink to='/portfolios' activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>

                    <li className="nav-item" onClick={navClick}>
                        <NavLink to='/contact' activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>@{(new Date().getFullYear())} Pamtel</p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar
