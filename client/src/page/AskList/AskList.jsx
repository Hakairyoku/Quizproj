import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../services/axios";

export default function AskList() {
  const { id } = useParams();
  const [ask, setAsk] = useState({});
  const [answer, SetAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState("");
  const axiosQuestions = async () => {
    const { data } = await request.get(`/asks/${id}`);
    setRightAnswer("");
    if (data.message === "success") {
      setAsk(data.ask);
    }
  };

  useEffect(() => {
    axiosQuestions();
  }, [id]);
  function checkAnswer() {
    if (answer.toLowerCase() === ask.answer.toLowerCase()) {
      setRightAnswer("Success!");
      console.log("Success!");
      SetAnswer("");
    } else {
      setRightAnswer(`No!!
      Правильный ответ: ${ask.answer}`);
      console.log("No!!");
      SetAnswer("");
    }
  }

  return (
    <div>
      <div>
        {ask &
        (
          <>
            <img src={ask.img} />
            <p>{ask.question}</p>
          </>
        )}

        <div>
          <input
            placeholder="Введите Ваш ответ"
            type="text"
            value={answer}
            onChange={(e) => SetAnswer(e.target.value)}
          />
          <button type="button" onClick={checkAnswer}>
            OK
          </button>

          {id == 7 || id == 13 ? (
            <button>
              {" "}
              <Link to="/">Главное меню</Link>
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
