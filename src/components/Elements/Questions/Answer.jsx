const Answer = (props) => {
  const {answer,onClick} = props
  return (
    <div className="text-sky-700 py-1.5 mb-1.5 text-lg md:text-xl font-semibold cursor-pointer hover:bg-gray-100 rounded-full" onClick={onClick}>
      {answer}
    </div>
  );
};

export default Answer;
