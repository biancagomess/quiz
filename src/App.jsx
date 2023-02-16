
import { useContext, useEffect } from 'react'

import './App.css'

import Category from './components/category/Category'
import GameOver from './components/gameOver/GameOver'
import Question from './components/question/Question'
import Welcome from './components/welcome/Welcome'

import { QuizContext } from './context/quiz'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz - Tec</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <Category />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
