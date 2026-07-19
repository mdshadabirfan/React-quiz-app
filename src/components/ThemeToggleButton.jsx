import React, { useEffect } from "react";
import { GoSun } from "react-icons/go";
import { FiMoon } from "react-icons/fi";
const ThemeToggleButton = ({ theme, setTheme }) => {
  return (
    <div className="absolute top-6 right-5">
      <div>
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <div className="text-3xl">{theme === "light" ? <FiMoon /> : <GoSun className="text-yellow-300"/>}</div>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggleButton;
