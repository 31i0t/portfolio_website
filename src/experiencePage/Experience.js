import React, { useRef } from 'react';
import Title from '../globalComponents/Title.js'
import Excerpts from '../globalComponents/Excerpts'
import Highlights from '../globalComponents/Highlights'
import experienceData from './experienceData'
import { render } from '@testing-library/react';

export default class Experience extends React.Component {

    constructor(props) {
        super(props)
        this.experiencePageRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateCurrentPage)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateCurrentPage)
    }

    updateCurrentPage = () => {
        
        var currentActiveLink = document.getElementById("experienceLink")
        var currentActiveLinkFooter = document.getElementById("experienceLinkFooter")
        

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
        var pageDimensions = this.experiencePageRef.current.getBoundingClientRect()
        var currentPosition = window.innerHeight / 2
        var onPage = pageDimensions.y < currentPosition && (pageDimensions.y + pageDimensions.height) > currentPosition

        return onPage
    }

    render() {
        return (
            <div id = "experiencePage" ref = {this.experiencePageRef}>
                <Title title={"Professional History"}/>
                <Excerpts items={experienceData.excerpts}/>
            </div>
        );
    };
};
