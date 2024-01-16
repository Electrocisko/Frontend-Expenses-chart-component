/* eslint-disable react/prop-types */
import styles from "./card.module.scss";
import Level from "../level/Level";
import { useState } from "react";

function Card({data}) {

  const [max,setMax] = useState(0);
 
  data.forEach(element => {
    if (element.amount > max) {
     setMax(element.amount)
    }
  });

  return (
    <div className={styles.card}>
      <h3>Spending - Last 7 days</h3>
      <div className={styles.levels}>
      {data.map( (item, index)=> (
        <Level key={index} day={item.day} amount={item.amount} max={max}/>
      ) )}
    
      </div>
      <hr />
      <div className={styles.totals}>
        <div>
          <p>Total this month</p>
          <h2>$478.33</h2>
        </div>
        <div>
          <h4>+2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
