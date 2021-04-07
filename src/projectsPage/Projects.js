import React from 'react';
import Title from '../globalComponents/Title.js'
import Highlights from '../globalComponents/Highlights'
import Excerpts from '../globalComponents/Excerpts'
import Gallery from '../globalComponents/Gallery'
import InfoPanel from '../globalComponents/InfoPanel'
import projectsData from './projectsData'

const Projects = () => {
    return (
        <div>
            <Title title={"My Projects"}/>
            <InfoPanel items={projectsData.infopanels}/>
            <Title title={"Team Projects"}/>
            <InfoPanel items={projectsData.infopanels2}/>
        </div>
    );
};

export default Projects