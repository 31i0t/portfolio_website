import React from 'react';
import Title from '../globalComponents/Title.js'
import Highlights from '../globalComponents/Highlights'
import Excerpts from '../globalComponents/Excerpts'
import Gallery from '../globalComponents/Gallery'
import InfoPanel from '../globalComponents/InfoPanel'

import referencesData from './referencesData'


const References = () => {
    return (
        <div>
            <Title title={"Comments From My Mentors"}/>
            <Excerpts items={referencesData.excerpts}/>
        </div>
    );
};

export default References