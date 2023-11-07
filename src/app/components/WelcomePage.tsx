import Image from "next/image";
import goodLuck from "../assets/goodLuck.gif";
import { Button } from "./Button/Button";

export const WelcomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: "2.5rem",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Welcome to my Christmas Quiz round!
      </h2>
      <span style={{ textAlign: "center" }}>
        <p>Its a race to the end of the form... how hard can it be?</p>
        <p>
          Fill in each input, when you are happy with your answer, click submit
          and then click continue
        </p>
      </span>
      <span style={{ textAlign: "center" }}>
        <p>
          <strong>1st Place:</strong> 10 points, <strong>2nd Place:</strong> 9
          points, <strong>3rd Place:</strong> 8 points, Etc etc etc
        </p>
      </span>
      <Button onClick={() => console.log("pressed")}>Press to test</Button>
      <Image
        style={{ maxWidth: "50%", margin: "auto" }}
        src={goodLuck}
        alt="Taken good luck gif"
      />
    </div>
  );
};
