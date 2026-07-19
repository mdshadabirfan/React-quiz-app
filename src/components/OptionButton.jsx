import React from "react";

const OptionButton = ({
  option,
  optionIndex,
  onClick,
  disabled,
  selectedOption,
  correctAnswer,
}) => {
  const optionLetter = String.fromCharCode(65 + optionIndex);
  const isCorrect = option === correctAnswer;
  const isSelected = option === selectedOption;

  let buttonClass =
    "bg-slate-300 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600";

  if (disabled && isCorrect) {
    buttonClass = "bg-green-500 text-white";
  } else if (disabled && isSelected) {
    buttonClass = "bg-red-500 text-white";
  }
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(option)}
      className={`
flex items-center p-4 rounded-xl transition-all duration-200
w-full text-left shadow-lg border border-slate-300 dark:border-slate-600 focus:ring-2
focus:ring-blue-500
${buttonClass}
${
  disabled
    ? " cursor-not-allowed opacity-80"
    : " cursor-pointer hover:scale-102"
}
`}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mr-4">
        {optionLetter}
      </div>

      <div className="flex-1">
        <div className="font-semibold text-lg">{option}</div>
      </div>
    </button>
  );
};

export default OptionButton;
