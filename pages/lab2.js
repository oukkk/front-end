import { useState } from "react";

export default function Lab2() {
  const [color, setColor] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = (color) => {
    setColor(color);
    setButtonClicked(true);
  };

  const handleReset = () => {
    setColor("");
    setButtonClicked(false);
  };

  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>Өнгө солих:</p>
      {!buttonClicked ? (
        <>
          <button
            className="border bg-red-800 py-4 px-6"
            onClick={() => handleButtonClick("red")}
          >
            Улаан
          </button>

          <button
            className="border bg-blue-800 py-4 px-6"
            onClick={() => handleButtonClick("blue")}
          >
            Цэнхэр
          </button>

          <button
            className="border bg-green-800 py-4 px-6"
            onClick={() => handleButtonClick("green")}
          >
            Ногоон
          </button>
        </>
      ) : (
        <>
          <button
            className={`border bg-${color}-800 py-4 px-6`}
            disabled
          >
            {color === "red" ? "Улаан" : color === "blue" ? "Цэнхэр" : "Ногоон"}
          </button>

          <button
            className="border bg-gray-800 py-4 px-6"
            onClick={handleReset}
          >
            Дахин эхлүүлэх
          </button>
        </>
      )}
    </div>
  );
}
