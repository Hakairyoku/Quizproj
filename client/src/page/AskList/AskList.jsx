import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import request from '../services/axios';

export default function AskList() {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answer, SetAnswer] = useState('');
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
        SetAnswer('');
      }, 1000); // 1 second delay before clearing answer
    } else {
      setRightAnswer(`No!! Правильный ответ: ${question.answer}`);
      SetAnswer('');
    }
  }

  return (
    <div>
      <div>
        {question.img && <img src={question.img} alt="Question" />}
        <p>{question.question || 'Loading...'}</p>
        <div>
          <input
            placeholder='Введите Ваш ответ'
            type='text'
            value={answer}
            onChange={(e) => SetAnswer(e.target.value)}
          />
          <button type='button' onClick={checkAnswer}>OK</button>


         
          {id == 8 || id == 16 ? (
            <button>
              {' '}
              <Link to='/topics'>Категории</Link>
            </button>
          ) : (
            <button>
              <Link to={`/asks/${+id + 1}`}>Next</Link>
            </button>
          )}
     
           

        
        </div>
        <div>{rightAnswer}</div>
      </div>
    </div>
  );
}
