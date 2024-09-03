import React from "react";
import styles from "./merch.module.css"
import merch from "./merch2.png"
import merch2 from "./merchimg/b5.png"
import mascot from "./mascot.png"
import { Link } from "react-router-dom";
function Merch() {
  return (
//    <div className={styles.container}>


//     <div className={styles.box}>
//     <img className={styles.imgmerch} src={merch} alt="" />
//    </div>
//     <Link className={styles.buynow}>Buy Now</Link>
//    </div>
<div className={styles.events}>
      <h1 className={styles.title}>Our Merchandise</h1>
        <div className={styles.box}>
            <div className={styles.box2}>
            <img className={styles.imgmerch} src={merch} alt="" />
            <img className={styles.imgmerch2} src={merch2} alt="" />
            </div>
            <img className={styles.imgmerch2} src={mascot} alt="" />
        </div>
        <Link className={styles.workButton} to="/merch">
            BUY NOW
        </Link>
    </div>
  );
}

export default Merch;

