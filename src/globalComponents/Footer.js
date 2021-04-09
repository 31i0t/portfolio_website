import React from 'react';
import './Footer.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {
      Route,
      NavLink,
      HashRouter
    } from "react-router-dom";

    export default class Footer extends React.Component {

        constructor(props) {
            super(props)
            this.projectsAnchor = React.createRef();
            this.experienceAnchor = React.createRef();
            this.referencesAnchor = React.createRef();
            this.educationAnchor = React.createRef();
        }
    
        componentDidMount() {
            this.projectsAnchor.current.addEventListener('click', this.scrollToProjects)
            this.experienceAnchor.current.addEventListener('click', this.scrollToExperience)
            this.referencesAnchor.current.addEventListener('click', this.scrollToReferences)
            this.educationAnchor.current.addEventListener('click', this.scrollToEducation)
        }

        scrollToProjects = () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const projectsPage = document.getElementById("projectsPage")
            var scrollToPos = projectsPage.getBoundingClientRect().y
    
            scroll.scrollTo(scrollTop + scrollToPos - 100, {
                                                duration: 800,
                                                smooth: true})   
        }
    
        scrollToExperience = () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const experiencePage = document.getElementById("experiencePage")
            var scrollToPos = experiencePage.getBoundingClientRect().y
    
            scroll.scrollTo(scrollTop + scrollToPos - 100, {
                                                duration: 800,
                                                smooth: true})   
        }
    
        scrollToReferences = () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const referencesPage = document.getElementById("referencesPage")
            var scrollToPos = referencesPage.getBoundingClientRect().y
    
            scroll.scrollTo(scrollTop + scrollToPos - 100, {
                                                duration: 800,
                                                smooth: true})   
        }
    
        scrollToEducation = () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const educationPage = document.getElementById("educationPage")
            var scrollToPos = educationPage.getBoundingClientRect().y
    
            scroll.scrollTo(scrollTop + scrollToPos - 100, {
                                                duration: 800,
                                                smooth: true})   
        }

        render() {
            return (
                <footer>
                    <div id = "footer-container">
                        <div className = "footer-column">
                            <h2>Navigation</h2>
                            <ul>
                                <li id = "projectsLinkFooter" className= "footer-active-link"><a ref = {this.projectsAnchor}>Projects</a></li>
                                <li id = "experienceLinkFooter" className= "footer-active-link"><a ref = {this.experienceAnchor}>Experience</a></li>
                                <li id = "referencesLinkFooter" className= "footer-active-link"><a ref = {this.referencesAnchor}>References</a></li>
                                <li id = "educationLinkFooter" className= "footer-active-link"><a ref = {this.educationAnchor}>Education</a></li>
                            </ul>
                        </div>
                        <div className = "footer-column2">
                            <h2>Contact</h2>
                            <ul>
                                <li>Email:</li>
                                <li><a href="mailto:eliot@makoski.net">eliot@makoski.net</a></li>
                                <li><a href="https://www.linkedin.com/in/eliotmakoski">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className = "footer-column3">
                            <h2>More</h2>
                            <ul>
                                <li><a style = {{fontWeight: "bold", color: "#FDB447"}} href="https://drive.google.com/file/d/1RWqkzfuyaUyvWL8b8wfNYfSnKa1BchYV/view?usp=sharing">Download CV</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            );
        };
};