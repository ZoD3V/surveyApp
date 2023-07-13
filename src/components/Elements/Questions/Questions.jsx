const Questions = (props) => {
  const { questions } = props;
  return (
    <div className="text-start text-2xl md:text-3xl text-sky-700 font-semibold mb-5">
      {questions}
    </div>
  );
};

export default Questions;
