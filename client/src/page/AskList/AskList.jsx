import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import request from '../services/axios';
import './AskList.css';

export default function AskList() {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');

  const axiosQuestions = async () => {
    try {
      const { data } = await request.get(`/asks/${id}`);
      setRightAnswer('');
      if (data && data.message === 'success' && data.ask) {
        setQuestion(data.ask);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  useEffect(() => {
    axiosQuestions();
  }, [id]);

  function checkAnswer() {
    if (answer.toLowerCase() === (question.answer || '').toLowerCase()) {
      setRightAnswer('Success!');
      setTimeout(() => {
        setAnswer('');
      }, 1000); // 1 second delay before clearing answer
    } else {
      setRightAnswer(`No!! Правильный ответ: ${question.answer}`);
      setAnswer('');
    }
  }

  return (
    <div className="asklist-container">
      <div>
        {question.img && <img src={question.img} alt="Question" className="question-image" />}
        <p className="question-text">{question.question || 'Loading...'}</p>
        <div>
          <input
            placeholder='Введите Ваш ответ'
            type='text'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="answer-input"
          />
          <button type='button' onClick={checkAnswer} className="submit-button">OK</button>
          {id == 8 || id == 16 ? (
            <button className="navigation-button">
              <Link to='/topics' className="link-button">Категории</Link>
            </button>
          ) : (
            <button className="navigation-button">
              <Link to={`/asks/${+id + 1}`} className="link-button">Next</Link>
            </button>
          )}
        </div>
        <div className="right-answer">{rightAnswer}</div>
      </div>
    </div>
  );
}
