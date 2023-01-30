import React, { useState } from "react";
import "./App.css";
function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);

  const GetTime = () => {
    time = new Date().toLocaleTimeString([], { hour12: true });
    return setTime(time);
  };

  setInterval(GetTime, 1000);

  return (
    <div className="display">
      <h1 id="time">{ctime}</h1>
    </div>
  );
}

export default App;
