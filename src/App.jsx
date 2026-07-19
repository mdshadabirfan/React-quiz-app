import React, { useState } from "react";
import Timer from "./components/Timer";
import Question from "./components/Question";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App = () => {
  const [totalDuration, setTotalDuration] = useState(5);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-white relative overflow-hidden dark">
<ThemeToggleButton theme = {theme} setTheme={setTheme} />
      <Timer
        totalDuration={totalDuration}
        setTotalDuration={setTotalDuration}
        theme = {theme}
      />
      <Question totalDuration={totalDuration} theme = {theme} />
    </div>
  );
};

export default App;
