// @ts-nocheck
import { useEffect, useState } from "react";

export const FieldOne = () => {
  useEffect(() => {
    const light = document.getElementById("light")!;
    const roomPosition = {
      top: document.getElementById("darkness")!.offsetTop,
      left: document.getElementById("darkness")!.offsetLeft,
    };

    const topMargin = roomPosition.top + window.innerHeight * Math.random();
    const position = {
      left: Math.random() * roomPosition.left,
      top: topMargin + 50 < window.innerHeight ? topMargin : topMargin - 50,
    };

    function update(e: any) {
      // @ts-expect-error
      const x = e.clientX - 50 || (e.touches && e.touches[0].clientX - 50);
      // @ts-expect-error
      const y = e.clientY - 50 || (e.touches && e.touches[0].clientY - 50);

      light.style.left = x + "px";
      light.style.top = y + "px";
    }

    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);

    console.log("UseEffect Fired");
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{color: "white", fontWeight: 700, zIndex: 999, position: "relative"}}>Click on your user to begin</div>
      <div className="darkness" id="darkness">
        <div className="light" id="light">
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
};
