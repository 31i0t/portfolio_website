import React from 'react';
import Title from '../globalComponents/Title.js'
import Highlights from '../globalComponents/Highlights'
import Excerpts from '../globalComponents/Excerpts'
import Gallery from '../globalComponents/Gallery'
import InfoPanel from '../globalComponents/InfoPanel'

import educationData from './educationData'


const Education = () => {
    return (
        <div>
            <Title title={"My Academic History"}/>
            <Excerpts items={educationData.excerpts}/>
        </div>
    );
};

export default Education