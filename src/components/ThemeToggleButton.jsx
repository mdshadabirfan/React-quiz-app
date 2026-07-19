import React from "react";

const ThemeToggleButton = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="absolute top-4 right-4">
      <div>
        <button aria-label="Toggle Dark Mode" onClick={toggleTheme}>
          X
        </button>
      </div>
    </div>
  );
};

export default ThemeToggleButton;
