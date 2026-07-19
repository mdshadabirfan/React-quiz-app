import React from "react";

const NextButton = ({ isDisabled, onNext, currentIndex, totalQuestions }) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onNext}
      className={`mt-4 w-full text-lg px-10 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg text-white
        ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cursor-pointer"
        }`}
    >
      {currentIndex >= totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
    </button>
  );
};

export default NextButton;
