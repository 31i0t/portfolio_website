import React from 'react';
import './Footer.css';

import {
      Route,
      NavLink,
      HashRouter
    } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div id = "footer-container">
                <div className = "footer-column">
                    <h2>Navigation</h2>
                    <ul>
                        <li><NavLink className= "footer-page" exact to="/">Projects</NavLink></li>
                        <li><NavLink className= "footer-page" to="/experience">Experience</NavLink></li>
                        <li><NavLink className= "footer-page" to="/references">References</NavLink></li>
                        <li><NavLink className= "footer-page" to="/education">Education</NavLink></li>
                    </ul>
                </div>
                <div className = "footer-column">
                    <h2>Contact</h2>
                    <ul>
                        <li>Email:</li>
                        <li><a href="mailto:eliot@makoski.net">eliot@makoski.net</a></li>
                        <li><a href="https://www.linkedin.com/in/eliotmakoski">LinkedIn</a></li>
                    </ul>
                </div>
                <div className = "footer-column">
                    <h2>More</h2>
                    <ul>
                        <li><a style = {{fontWeight: "bold", color: "#FDB447"}} href="https://drive.google.com/file/d/1RWqkzfuyaUyvWL8b8wfNYfSnKa1BchYV/view?usp=sharing">Download CV</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer