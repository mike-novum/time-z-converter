import { useState, type ChangeEventHandler } from "react";
import { Clock } from "./Clock";
import { getTimePhrases } from "./wordForm";

export default function App() {
  const [time, setTime] = useState("18:45");

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTime(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h2>Введите время (формат ЧЧ:ММ)</h2>
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        style={{
          fontSize: "1.2rem",
          padding: "0.5rem",
          margin: "1rem",
        }}
      />
      <div>
        <Clock time={time} />
      </div>
      <div>
        <p>{getTimePhrases(time).join(", ")}</p>
      </div>
    </div>
  );
}
