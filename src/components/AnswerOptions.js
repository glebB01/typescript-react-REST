import React from 'react';

import { getRandomCountry, shuffle } from "../utils";

const AnswerOptions = ({ correctCountry, category, countries }) => {

    const answersArray = [];
    answersArray[0] = getRandomCountry(countries)[category];
    answersArray[1] = getRandomCountry(countries)[category];
    answersArray[2] = correctCountry[category];
    shuffle(answersArray);

    const answerButtons = answersArray.map((answer) => {
        if (category !== "flag") {
            return (
                <button key={answer}>{answer}</button>
            )
        } else {
            return (
                <img className="flag" src={answer} alt="flag" key={answer}></img>                
            )
        }
    });

    return (
        <div className="answer-options">
            {answerButtons}
        </div>
    )
};

export default AnswerOptions;
