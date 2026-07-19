import React, { useState } from "react";
import questions from "./questions.json";
import OptionButton from "./OptionButton";
import NextButton from "./NextButton";
import Result from "./Result";
const Question = ({
  currentIndex,
  setCurrentIndex,
  score,
  setScore,
  selectedOption,
  setSelectedOption,
  totalDuration,
  theme,
  restartQuiz
}) => {
  const handleOptionClick = (clickedOption) => {
    if (selectedOption !== null) return;

    setSelectedOption(clickedOption);

    if (clickedOption === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };
  const goToNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
  };
  return currentIndex === questions.length || totalDuration === 0 ? (
    <Result score={score} onRestart={restartQuiz} />
  ) : (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/2 text-center lg:text-left text-2xl">
          <div className="w-full bg-gray-400  h-2.5 dark:bg-gray-700 mb-3 absolute top-0 left-0">
            <div
              className="bg-blue-600 h-2.5"
              style={{
                width: `${(currentIndex / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="text-2xl">{`Q${currentIndex + 1} of ${questions.length}: ${questions[currentIndex].question}`}</div>
        </div>
        <div className="lg:w-1/2 w-full max-w-md space-y-4">
          {questions[currentIndex].options.map((option, optionIndex) => {
            return (
              <OptionButton
                key={optionIndex}
                option={option}
                optionIndex={optionIndex}
                onClick={handleOptionClick}
                disabled={selectedOption !== null}
                selectedOption={selectedOption}
                correctAnswer={questions[currentIndex].answer}
              />
            );
          })}
          <NextButton
            isDisabled={selectedOption === null}
            onNext={goToNextQuestion}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
