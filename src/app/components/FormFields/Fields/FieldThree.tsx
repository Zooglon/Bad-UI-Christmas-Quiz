import { useState } from "react";
import { keyboard } from "../helperFunctions";

const chineseAlphabet = [
  "诶",
  "比",
  "西",
  "迪",
  "伊",
  "艾弗",
  "吉",
  "艾尺",
  "艾",
  "杰",
  "开",
  "艾勒",
  "艾马",
  "艾娜",
  "哦",
  "屁",
  "吉吾",
  "艾儿",
  "艾丝",
  "提",
  "伊吾",
  "维",
  "豆贝尔维",
  "艾克斯",
  "吾艾",
  "贼",
];

export const FieldThree = () => {
  const [nameInput, setNameInput] = useState<undefined | string[]>([]);
  const [changeLanguage, setChangeLanguage] = useState(false);

  const timerHand = document.getElementById("tickerHand");

  const handleClick = (key: string) => {
    if (!changeLanguage) {
      setNameInput(!nameInput ? [key] : [...nameInput, key]);
      const num = Math.floor(Math.random() * 6);
      setChangeLanguage(true);
      console.log(timerHand);
      const ticketSpinning = [
        { transform: "rotate(0) scale(1)" },
        { transform: "rotate(360deg) scale(1)" },
      ];

      const ticketTiming = {
        duration: num * 1000,
        iterations: 1,
      };

      timerHand && timerHand.animate(ticketSpinning, ticketTiming);
      setTimeout(() => {
        setChangeLanguage(false);
        onScreenKeyboard.sort(() => Math.random() - 0.5);
      }, num * 1000);
    }
  };

  let lineOne: string[] = [];
  let lineTwo: string[] = [];
  let lineThree: string[] = [];

  let onScreenKeyboard = !changeLanguage ? keyboard : chineseAlphabet;

  onScreenKeyboard.forEach((letter, key) => {
    if (key <= 9) {
      lineOne.push(letter);
    } else if (key >= 10 && key <= 18) {
      lineTwo.push(letter);
    } else {
      lineThree.push(letter);
    }
  });

  return (
    <>
      <div className="form__text">
        <h2>What is your last name?</h2>
        <h4>
          Please input your last name below, when you have finished click the
          submit button
        </h4>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        {/* On screen keyboard - timer ticks down and then changes language to Chinese etc and shuffles letters  */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "500px",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <span>Name: </span>
            <span>{nameInput && nameInput.map((letter) => letter)}</span>
            <div
              style={{
                border: "1px solid black",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={() => setNameInput([""])}
            >
              Reset
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "25%" }}></div>
            <div style={{ width: "50%" }}>
              <div className="input__keyboardRow">
                {/* Line One */}
                {lineOne.map((key, i) => {
                  return (
                    <span
                      className="input__keyboard"
                      key={i}
                      onClick={() => handleClick(key)}
                    >
                      {key}
                    </span>
                  );
                })}
              </div>
              <div className="input__keyboardRow">
                {/* Line Two */}
                {lineTwo.map((key, i) => {
                  return (
                    <span
                      className="input__keyboard"
                      key={i}
                      onClick={() => handleClick(key)}
                    >
                      {key}
                    </span>
                  );
                })}
              </div>
              <div className="input__keyboardRow">
                {/* Line Three */}
                {lineThree.map((key, i) => {
                  return (
                    <span
                      className="input__keyboard"
                      key={i}
                      onClick={() => handleClick(key)}
                    >
                      {key}
                    </span>
                  );
                })}
              </div>
            </div>
            <div style={{ width: "25%" }}>
              {/* Timer Clock */}
              <div className="timer__container">
                <div className="timer__ticker" id="tickerHand"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
