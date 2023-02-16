import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import QuizWelcome from '../../img/quizWelcome.png'
import React from "react";
import './Welcome.css'

const Welcome = () => {

    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="welcome">
            <div className='welcome_text'>
                <h2>Seja Bem Vindo</h2>
                <p>Clique no botão abaixo para iniciar:</p>
            </div>
            <div className='welcome_start'>
                <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>Iniciar</button>
                <img src={QuizWelcome} alt="Seja Bem Vindo ao Quiz Tec" title="Seja Bem Bindo ao Quiz Tec"/>

            </div>
        </div>
    )
}

export default Welcome