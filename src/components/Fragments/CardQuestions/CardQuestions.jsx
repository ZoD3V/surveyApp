/* eslint-disable react/prop-types */
import { AiOutlineReload } from "react-icons/ai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Questions from "../../Elements/Questions/Questions";
import Answer from "../../Elements/Questions/Answer";
import { questions, answersOptions } from "../../../Data/Data";

const CardQuestions = (props) => {
  const {
    answers,
    setAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    timerLeft,
    setTimeLeft,
  } = props;
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestionIndex(nextQuestionIndex);
    localStorage.setItem("currentQuestionIndex", nextQuestionIndex.toString());
  };

  const handleRestart = () => {
    localStorage.removeItem("currentQuestionIndex");
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("timeLeft");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTimeLeft(180);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {

        if (prevTimeLeft < 1) {
          navigate('/finish');
        }
        localStorage.setItem('timeLeft', prevTimeLeft);
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [navigate,setTimeLeft]);

  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
  }, [answers]);

  return (
    <div className="bg-white text-center rounded-xl border shadow-lg p-10 max-w-xs">
      {currentQuestionIndex < questions.length ? (
        <>
          <div className="flex justify-between items-center">
            <div className="text-gray-200 text-3xl font-bold text-start mb-5">
              Q{currentQuestionIndex+1}
            </div>
            <div>{timerLeft}</div>
            <div
              className="text-xl cursor-pointer font-bold"
              onClick={handleRestart}
            >
              <AiOutlineReload />
            </div>
          </div>
          <Questions questions={questions[currentQuestionIndex]} />
          {answersOptions[currentQuestionIndex].map((answer, index) => (
            <Answer
              key={index}
              onClick={() => handleAnswer(answer)}
              answer={answer}
            />
          ))}
        </>
      ) : (
        navigate('/finish')
      )}
    </div>
  );
};

export default CardQuestions;
