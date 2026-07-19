import React, { useEffect, useState } from "react";

const Timer = ({totalDuration, setTotalDuration, theme}) => {
  useEffect(() => {
    let timerId = setInterval(() => {
      setTotalDuration((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [setTotalDuration]);
  const minutes = Math.floor(totalDuration / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalDuration % 60).toString().padStart(2, "0");
  return (
    <div className="text-center text-3xl font-bold mt-5" style={{color: totalDuration <= 10? "red" : ""}}>
       Time Left: {minutes} : {seconds}
    </div>
  );
};

export default Timer;
