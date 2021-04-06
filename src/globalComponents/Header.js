import React, { useRef } from 'react';
import './Header.css';
import {
      Route,
      NavLink,
      HashRouter
    } from "react-router-dom";

export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.navBarDiv = React.createRef();
        this.navBarUl = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleNavBar)
        window.addEventListener('resize', this.handleNavBar)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleNavBar)
        window.removeEventListener('resize', this.handleNavBar)
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
                                <li><NavLink className= "header-description-nav-page" exact to="/">Projects</NavLink></li>
                                <li><NavLink className= "header-description-nav-page" to="/experience">Experience</NavLink></li>
                                <li><NavLink className= "header-description-nav-page" to="/references">References</NavLink></li>
                                <li><NavLink className= "header-description-nav-page" to="/education">Education</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};