import React, { useState } from 'react'
import Question from './Question'
import questionsData from './questionsData'
import './Questions.css'

function Questions() {

    const [questions, setQuestions] = useState(questionsData);

    return (
        <div>
            <section id = "questions-container">
            {
                questionsData.map((question) => {
                    return <Question key = {question.id} {...question}/>
                })
            }
            </section>
        </div>
    );
}

export default Questions