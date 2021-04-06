import React from 'react';
import Title from '../globalComponents/Title.js'
import Excerpts from '../globalComponents/Excerpts'
import Highlights from '../globalComponents/Highlights'
import experienceData from './experienceData'

const Experience = () => {
    return (
        <div>
            <Title title={"Professional History"}/>
            <Excerpts items={experienceData.excerpts}/>
        </div>
    );
};

export default Experience