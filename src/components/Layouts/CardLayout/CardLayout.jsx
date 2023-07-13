import { useState } from "react";
import CardQuestions from "../../Fragments/CardQuestions/CardQuestions";

const CardLayout = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const storedIndex = localStorage.getItem("currentQuestionIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });
  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem("surveyAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : [];
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem("timeLeft");
    return storedTime ? parseInt(storedTime, 10) : 180;
  });
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-400">
      <CardQuestions
        timerLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        answers={answers}
        setAnswers={setAnswers}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
};

export default CardLayout;
