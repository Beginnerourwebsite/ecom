import React, { useEffect, useState } from "react";
const patternString = "s"; // or any other dynamic pattern as a string
const pattern = new RegExp(patternString);


let Testout = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  

  return (
    <div>
      <span>
        {windowWidth} x {windowHeight}
      </span>
    </div>
  );
};
export default Testout