import React, { useRef } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Header.css';

export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.navBarDiv = React.createRef();
        this.navBarUl = React.createRef();
        this.projectsAnchor = React.createRef();
        this.experienceAnchor = React.createRef();
        this.referencesAnchor = React.createRef();
        this.educationAnchor = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleNavBar)
        window.addEventListener('resize', this.handleNavBar)
        this.projectsAnchor.current.addEventListener('click', this.scrollToProjects)
        this.experienceAnchor.current.addEventListener('click', this.scrollToExperience)
        this.referencesAnchor.current.addEventListener('click', this.scrollToReferences)
        this.educationAnchor.current.addEventListener('click', this.scrollToEducation)
    }

    handleNavBar = () => {    

        if((this.navBarDiv.current.getBoundingClientRect().y <= 0)) {

            this.navBarUl.current.classList.add("addNavBarHover")
            var middleXPos = (document.body.clientWidth - this.navBarUl.current.getBoundingClientRect().width) / 2
            var newMarginLeft = parseInt(Math.round(middleXPos - this.navBarDiv.current.getBoundingClientRect().x)) + "px"
            
            if(this.navBarDiv.current.getBoundingClientRect().x > 25)
            {
                this.navBarUl.current.style.marginLeft = newMarginLeft    
                this.navBarUl.current.style.marginTop = "1rem"
            } else {
                this.navBarUl.current.style.marginLeft = "0"
                this.navBarUl.current.style.marginTop = "0"
            }
        }
        else {
            this.navBarUl.current.classList.remove("addNavBarHover")
            this.navBarUl.current.style.marginLeft = "0"
            this.navBarUl.current.style.marginTop = "0"
        }
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
            <div id = "header">
                <header id = "header-container">
                    <div id = "header-image-container">
                        <img id = "header-image" src='./images/header_image.jpg' alt='Image of practice'/>
                    </div>
                    <div id = "header-description-container">
                        <h1 className = "header-description-item">Eliot Makoski</h1>
                        <h2 className = "header-description-item">I am passionate about using technology to positively impact the lives of everyday people.</h2>
                        <div ref = {this.navBarDiv}>
                            <ul ref = {this.navBarUl} id = "header-description-nav-bar">
                                <li id = "projectsLink" className= "header-active-link"><a ref = {this.projectsAnchor} >Projects</a></li>
                                <li id = "experienceLink" className= "header-active-link"><a ref = {this.experienceAnchor} >Experience</a></li>
                                <li id = "referencesLink" className= "header-active-link"><a ref = {this.referencesAnchor} >References</a></li>
                                <li id = "educationLink" className= "header-active-link"><a ref = {this.educationAnchor} >Education</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};
