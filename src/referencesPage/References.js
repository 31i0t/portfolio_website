import React from 'react';
import Title from '../globalComponents/Title.js'
import Highlights from '../globalComponents/Highlights'
import Excerpts from '../globalComponents/Excerpts'
import Gallery from '../globalComponents/Gallery'
import InfoPanel from '../globalComponents/InfoPanel'

import referencesData from './referencesData'


export default class References extends React.Component {

    constructor(props) {
        super(props)
        this.referencesPageRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateCurrentPage)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateCurrentPage)
    }

    updateCurrentPage = () => {
        var currentActiveLink = document.getElementById("referencesLink")
        var currentActiveLinkFooter = document.getElementById("referencesLinkFooter")
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
        var pageDimensions = this.referencesPageRef.current.getBoundingClientRect()
        var currentPosition = window.innerHeight / 2
        var onPage = pageDimensions.y < currentPosition && (pageDimensions.y + pageDimensions.height) > currentPosition

        return onPage
    }


    render() {
        return (
            <div id = "referencesPage" ref = {this.referencesPageRef}>
                <Title title={"Kind Words"}/>
                <Excerpts items={referencesData.excerpts}/>
            </div>
        );
    }
};
