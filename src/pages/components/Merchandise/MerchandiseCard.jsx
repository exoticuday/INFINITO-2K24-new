import React from 'react';
import styles from './MerchandiseCard.module.css';

const MerchandiseCard = ({ frontContent, backContent }) => {
  

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img className={styles.cardimg} src={frontContent.image} alt={frontContent.title} />
        </div>
        <div className={styles.cardBack}>
          <img className={styles.cardimg} src={backContent.image} alt={backContent.title} />
        </div>
      </div>
    </div>
  );
};

export default MerchandiseCard;
