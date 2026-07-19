import React, { useState } from "react";
import questions from "./questions.json";
import OptionButton from "./OptionButton";
import NextButton from "./NextButton";
import Result from "./Result";
const Question = ({totalDuration, theme}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [score, setScore] = useState(0);
  return (currentIndex === questions.length || totalDuration === 0) ? (
    <Result score={score}/>
  ) : (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/2 text-center lg:text-left text-2xl">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="text-2xl">{`Q${currentIndex + 1}: ${questions[currentIndex].question}`}</div>
        </div>
        <div className="lg:w-1/2 w-full max-w-md space-y-4">
          {questions[currentIndex].options.map((option, optionIndex) => {
            return (
              <OptionButton
                option={option}
                key={optionIndex}
                optionIndex={optionIndex}
                setIsDisabled={setIsDisabled}
                currentIndex={currentIndex}
                setScore={setScore}
              />
            );
          })}
          <NextButton
            isDisabled={isDisabled}
            setCurrentIndex={setCurrentIndex}
            setIsDisabled={setIsDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
