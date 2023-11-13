import { useState } from "react";
import { alphabet } from "../helperFunctions";

export const FieldTwo = () => {
  const [spinDirection, setSpinDirection] = useState("rotateForwards");
  const [nameInput, setNameInput] = useState<undefined | string[]>([]);

  let letters = alphabet;

  const handleSpin = (letter: string) => {
    setNameInput(!nameInput ? [letter] : [...nameInput, letter]);
    setSpinDirection(
      spinDirection === "rotateForwards" ? "rotateBackwards" : "rotateForwards"
    );
    letters.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <div className="form__text">
        <h2>What is your first name?</h2>
        <h4>
          Please input your first name below, when you have finished click the
          submit button
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "1rem",
          width: "300px",
        }}
      >
        <span>
          <strong>Name:</strong>
        </span>
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
      <div className="form__task">
        <div className={`main ${spinDirection}`}>
          {letters.map((letter, i) => (
            <div
              className="circleContainer"
              onClick={() => handleSpin(letter.toUpperCase())}
              key={i}
            >
              <span className="circleText">
                <strong>{letter.toUpperCase()}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
