import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../../Data/Data";

const EndPage = () => {
  const navigate = useNavigate();
  const storedIndex = localStorage.getItem("currentQuestionIndex");

  useEffect(() => {
    if (storedIndex < questions.length && storedIndex !== null)
      return navigate("/");
  }, [navigate, storedIndex, questions.length]);
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-400">
      <div className="font-bold text-2xl text-center p-5">Thank you for taking your time to fill out the survey.</div>
    </div>
  );
};

export default EndPage;
