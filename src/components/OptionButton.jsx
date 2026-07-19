import React from "react";
import questions from "./questions.json"
const OptionButton = ({ option, optionIndex, setIsDisabled, currentIndex, setScore }) => {
  const optionAlphaBet = ["A", "B", "C", "D"];
  const optionClick = () => {
    if(option  === questions[currentIndex].answer) setScore(prev => prev + 1);
    setIsDisabled(false)
  }
  return (
    <button className="flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 w-full text-left shadow-lg border border-slate-300 dark:border-slate-600 bg-slate-300 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 hover:scale-102" onClick={optionClick}>
      <div className="w-12 h-12 rounded-lg flex items-center justify-center  text-xl font-bold mr-4">{optionAlphaBet[optionIndex]}</div>
      <div className="flex-1">
        <div className="font-semibold text-lg">{option}</div>
      </div>
    </button>
  );
};

export default OptionButton;
