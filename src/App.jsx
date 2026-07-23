import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Question from "./components/Question";
import ThemeToggleButton from "./components/ThemeToggleButton";
const getInitialTheme = () => {
  return (
    localStorage.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
};
const App = () => {
  const QUIZ_DURATION = 70;

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setTotalDuration(QUIZ_DURATION);
  };
  const [totalDuration, setTotalDuration] = useState(QUIZ_DURATION);
  const [theme, setTheme] = useState(getInitialTheme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-white relative overflow-hidden">
      <ThemeToggleButton theme={theme} setTheme={setTheme} />
      <Timer
        totalDuration={totalDuration}
        setTotalDuration={setTotalDuration}
        theme={theme}
      />
      <Question
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        score={score}
        setScore={setScore}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        totalDuration={totalDuration}
        restartQuiz={restartQuiz}
      />
    </div>
  );
};

export default App;
