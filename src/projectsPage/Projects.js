import React, {useRef} from 'react';
import Title from '../globalComponents/Title.js'
import Highlights from '../globalComponents/Highlights'
import Excerpts from '../globalComponents/Excerpts'
import Gallery from '../globalComponents/Gallery'
import InfoPanel from '../globalComponents/InfoPanel'
import projectsData from './projectsData'

export default class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.projectsPageRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateCurrentPage)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateCurrentPage)
    }

    updateCurrentPage = () => {
        var currentActiveLink = document.getElementById("projectsLink")
        var currentActiveLinkFooter = document.getElementById("projectsLinkFooter")
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
        var pageDimensions = this.projectsPageRef.current.getBoundingClientRect()
        var currentPosition = window.innerHeight / 2
        var onPage = pageDimensions.y < currentPosition && (pageDimensions.y + pageDimensions.height) > currentPosition

        return onPage
    }

    render () {
        return (
            <div id = "projectsPage" ref = {this.projectsPageRef}>
                <Title title={"My Projects"}/>
                <InfoPanel items={projectsData.infopanels}/>
                <Title title={"Team Projects"}/>
                <InfoPanel items={projectsData.infopanels2}/>
            </div>
        );
    };
};