import React from 'react'
import "./Category.css"
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import ChoiceCategory from '../../img/choice_category.png'
import Question from '../question/Question'

const Category = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function chooseCategoryAndReorderQuestions(category) {
      dispatch({ type: "START_GAME", payload: category });
  
      dispatch({ type: "REORDER_QUESTIONS" });
    }
  
    return (
      <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
  
        <img src={ChoiceCategory} alt="Categoria do Quiz" />
      </div>
    );
}

export default Category