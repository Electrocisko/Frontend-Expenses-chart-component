import styles from './balance.module.scss';

function Balance() {
  return (

    <div className={styles.container}>
        <div className={styles.text_container}>
        <h3>My balance</h3> 
        <h2>$921.48</h2>
        </div>
        <img src="./images/logo.svg" alt="" height={'40px'} />
    </div>
  )
}

export default Balance