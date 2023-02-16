import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import QuizFinish from "../../img/gameover.jpg"

import "./GameOver.css"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className="gameOver">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}  </p>
            <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas. </p>
            <div className='gameOver_love'>

                <div className='drop' >
                    <p> Html</p>
                </div>
                <span>+</span>
                <div className='drop' >
                    <p> Css</p>
                </div>
                <span>+</span>
                <div className='drop' >
                    <p> Js</p>
                </div>
                <span>=</span>
                <div className='drop' >
                    <p> <ion-icon name="heart"></ion-icon></p>
                </div>

            </div>
            <button onClick={() => dispatch({ type: "NEW_GAME" })} >Jogar Novamente</button>
        </div>
    )
}

export default GameOver