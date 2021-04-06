import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import questionsData from './questionsData'
import './Questions.css'

const Question = ({title, description}) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <article id = 'question'>
            <h2>{title}</h2>
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}
            </button>
            {expanded &&  <p>{description}</p>}
        </article>
    )
}

export default Question