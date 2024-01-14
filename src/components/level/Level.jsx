/* eslint-disable react/prop-types */
import styles from './level.module.scss'

function Level({day,amount}) {
 
  let altura = `${amount*2}px`;
  
  return (
    <div className={styles.level_container}>
        <p className={styles.amount}>{amount}</p>
        <div className={styles.bar}  
         style={{
          height: altura
        }}
        ></div>
        <p className={styles.day}>{day}</p>
   
    </div>
  )
}

export default Level