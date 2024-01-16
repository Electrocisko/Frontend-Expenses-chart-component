/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./level.module.scss";

let softred = "hsl(10, 79%, 65%)";
let cyan = "hsl(186, 34%, 60%)";
let cyansoft = "hsl(187, 49%, 80%)";
let verypaleorange= "hsl(10, 100%, 76%)";

function Level({ day, amount, max }) {
  const [color, setColor] = useState(softred);
  const [colorCyan, setColorCyan] = useState(cyan);
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setColor(verypaleorange);
    setHover(true);
  };

  const mouseEnterCyan = () => {
    setColorCyan(cyansoft);
    setHover(true);
  };

  const mouseLeaveCyan = () => {
    setColorCyan(cyan);
    setHover(false);
  };

  const mouseLeave = () => {
    setColor(softred);
    setHover(false);
  };

  return (
    <div className={styles.level_container}>
      {hover && <p className={styles.amount}>${amount}</p>}
      {max == amount ? (
        <div
          onMouseEnter={mouseEnterCyan}
          onMouseLeave={mouseLeaveCyan}
          style={{
            backgroundColor: colorCyan,
            margin: "6px",
            borderRadius: "5px",
            height: amount * 2,
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          style={{
            backgroundColor: color,
            margin: "6px",
            borderRadius: "5px",
            height: amount * 2,
            cursor: "pointer",
          }}
        ></div>
      )}

      <p className={styles.day}>{day}</p>
    </div>
  );
}

export default Level;
