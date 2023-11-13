import { useState } from "react";
import { dateSelect } from "../helperFunctions";

export const FieldFour = () => {
  const [value, setValue] = useState<undefined | string>();

  const handleSelect = (letter: string) => {};

  console.log(value);

  return (
    <>
      <div className="form__text">
        <h2>What is your date of birth?</h2>
        <h4>
          Please input your date of birth below, when you have finished click
          the submit button
        </h4>
      </div>
      <div>
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input__select"
        >
          {dateSelect.map((date, i) => (
            <option value={date} key={i}>
              {date}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
