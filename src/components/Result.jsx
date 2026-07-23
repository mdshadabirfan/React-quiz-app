import React from "react";
import questions from "./questions.json";
import { FiRefreshCw, FiAward } from "react-icons/fi";

const Result = ({ score, onRestart }) => {
  const percentage = Math.round((score / questions.length) * 100);

  const getMessage = () => {
    if (percentage === 100) return "🏆 Perfect! Outstanding!";
    if (percentage >= 80) return "🎉 Excellent Work!";
    if (percentage >= 60) return "👏 Good Job!";
    if (percentage >= 40) return "🙂 Keep Practicing!";
    return "💪 Don't Give Up!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-800 shadow-2xl p-8 md:p-10">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-4xl shadow-lg">
            <FiAward />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center">
          Quiz Completed!
        </h1>

        <p className="text-center text-slate-500 dark:text-slate-400 mt-2 text-lg">
          {getMessage()}
        </p>

        <div className="mt-8 rounded-2xl bg-slate-100 dark:bg-slate-700 p-6">

          <div className="flex justify-between items-center py-3 border-b border-slate-300 dark:border-slate-600">
            <span className="text-lg">Score</span>
            <span className="text-2xl font-bold">
              {score} / {questions.length}
            </span>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="text-lg">Percentage</span>
            <span className="text-2xl font-bold text-green-500">
              {percentage}%
            </span>
          </div>

        </div>

        <button
          onClick={onRestart}
          className="mt-8 w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
        >
          <FiRefreshCw />
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;