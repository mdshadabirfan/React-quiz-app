import React from "react";
import questions from "./questions.json";

const Result = ({ score }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className=" lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl lg:text-4xl font-light mb-4 leading-tight">Quiz Completed</p>
          <h3 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Your Score:</h3>
          <div className="my-5">
            <div className="w-full bg-slate-300 dark:bg-slate-700 p-10 rounded text-center">
                <h2 className="text-6xl font-bold ">{`${score} / ${questions.length}`}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
