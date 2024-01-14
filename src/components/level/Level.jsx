/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./level.module.scss";

function Level({ day, amount }) {
  const [color, setColor] = useState("hsl(10, 79%, 65%)");
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setColor("hsl(186, 34%, 60%)");
    setHover(true)
  };

  return (
    <div className={styles.level_container}>
      {hover && <p className={styles.amount}>{amount}</p>}
      <div
        onClick={handleClick}
        style={{
          backgroundColor: color,
          margin: "6px",
          borderRadius: "5px",
          height: amount * 2,
        }}
      ></div>
      <p className={styles.day}>{day}</p>
    </div>
  );
}

export default Level;
