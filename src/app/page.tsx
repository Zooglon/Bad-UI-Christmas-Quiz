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
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2.5rem",
          alignItems: "flex-start",
          margin: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexGrow: 1,
            width: "30%",
          }}
        >
          <a href="/" style={{ width: "20%" }}>
            <Logo />
          </a>
        </div>
        <h1>Christmas Bad UX Race</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexGrow: 1,
            width: "30%",
          }}
        >
          <h3>Page: {welcomePage ? "Welcome" : currentField + 1}</h3>
        </div>
      </header>
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
        <footer
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button onClick={() => handleContinue()} disabled={!canContinue}>
            Continue
          </Button>
        </footer>
      )}
    </div>
  );
}
