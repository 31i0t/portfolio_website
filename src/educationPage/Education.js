import React from 'react';
import Title from '../globalComponents/Title.js'
import Highlights from '../globalComponents/Highlights'
import Excerpts from '../globalComponents/Excerpts'
import Gallery from '../globalComponents/Gallery'
import InfoPanel from '../globalComponents/InfoPanel'

import educationData from './educationData'


export default class Education extends React.Component {

    constructor(props) {
        super(props)
        this.educationPageRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateCurrentPage)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateCurrentPage)
    }

    updateCurrentPage = () => {
        var currentActiveLink = document.getElementById("educationLink")
        var currentActiveLinkFooter = document.getElementById("educationLinkFooter")
        
        if(this.checkCurrentPage())
        {
            currentActiveLink.classList.add("header-active")
            currentActiveLinkFooter.classList.add("footer-active")
        }
        else
        {
            currentActiveLink.classList.remove("header-active")
            currentActiveLinkFooter.classList.remove("footer-active")
        }
    }

    checkCurrentPage = () => {
        var pageDimensions = this.educationPageRef.current.getBoundingClientRect()
        var currentPosition = window.innerHeight / 2
        var onPage = pageDimensions.y < currentPosition && (pageDimensions.y + pageDimensions.height) > currentPosition

        return onPage
    }
    
    render() {
        return (
            <div id = "educationPage" ref = {this.educationPageRef}>
                <Title title={"Academic History"}/>
                <Excerpts items={educationData.excerpts}/>
            </div>
        );
    }
};

