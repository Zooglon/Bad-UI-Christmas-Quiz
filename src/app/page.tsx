"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Logo from "./assets/outserve-logo";
import { Button } from "./components/Button/Button";
import { FormFields } from "./components/FormFields/FormFields";
import { fieldsArray } from "./components/FormFields/FormFieldsData";
import { WelcomePage } from "./components/WelcomePage";

export default function Home() {
  const [currentField, setCurrentField] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [welcomePage, setWelcomePage] = useState(true);

  const handleContinue = () => {
    setCanContinue(false);
    console.log(currentField);
    console.log(fieldsArray.length);

    if (currentField + 1 === fieldsArray.length) {
      setCurrentField(0);
    } else setCurrentField(currentField + 1);
  };

  return (
    <div className="appContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2.5rem",
          alignItems: "baseline",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <a href="/">
          <Logo />
        </a>
        <h1>Christmas Web Form Race</h1>
      </div>
      {welcomePage ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            flexGrow: 2,
          }}
        >
          <WelcomePage />
          <Button onClick={() => setWelcomePage(false)}>Start</Button>
        </div>
      ) : (
        <FormFields field={currentField} setCanContinue={setCanContinue} />
      )}
      {!welcomePage && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button onClick={() => handleContinue()} disabled={!canContinue}>
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
