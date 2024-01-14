/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./level.module.scss";



function Level({ day, amount }) {
  const [color, setColor] = useState("hsl(10, 79%, 65%)");
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setColor("hsl(10, 100%, 76%)");
    setHover(true)
  };

    const mouseLeave = () => {
    setColor("hsl(10, 79%, 65%)");
    setHover(false)
  };


  return (
    <div className={styles.level_container}>
      {hover && <p className={styles.amount}>{amount}</p>}
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{
          backgroundColor: color,
          margin: "6px",
          borderRadius: "5px",
          height: amount * 2,
          cursor: "pointer"
        }}
      ></div>
      <p className={styles.day}>{day}</p>
    </div>
  );
}

export default Level;
