import React from "react";
import questions from "./questions.json"; // Imported to safely check total question length

const NextButton = ({ setIsDisabled, isDisabled, setCurrentIndex }) => {
  const changeQuestionIndex = () => {
    setCurrentIndex((prevIndex) => {
      // Prevents the app from crashing by freezing the index at the last question
      //       if (prevIndex >= questions.length - 1) return prevIndex;
      // else{setIsDisabled(true);
      //     return prevIndex + 1;
      // }
      setIsDisabled(true);
      return prevIndex + 1;
      //   return prevIndex + 1;
    });
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={changeQuestionIndex}
      // Visual feedback: Opacity drops and pointer events freeze when disabled
      className={`mt-4 w-full text-lg px-10 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg text-white
        ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cursor-pointer"
        }`}
    >
      Next Question
    </button>
  );
};

export default NextButton;
