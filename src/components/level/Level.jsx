/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./level.module.scss";

function Level({ day, amount, max, levelHeight }) {
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={styles.level_container}>
      {hover && <p className={styles.amount}>${amount}</p>}
      {max == amount ? (
        <div
          className={`${styles.bar} ${styles.barMax}`}
          style={{ height: amount*levelHeight }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        ></div>
      ) : (
        <div
          className={styles.bar}
          style={{ height: amount*levelHeight }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        ></div>
      )}

      <p className={styles.day}>{day}</p>
    </div>
  );
}

export default Level;
