import styles from "./BannerSliderEvent.module.css";
import image1 from "./images/slider2_1.png";
import image2 from "./images/slider2_2.png";
import image3 from "./images/slider2_3.png";
import image4 from "./images/slider2_4.png";
import image5 from "./images/slider2_5.png";
import image6 from "./images/slider2_6.png";
import image7 from "./images/slider2_7.png";
import image8 from "./images/slider2_8.png";
import image9 from "./images/slider2_9.png";

function BannerSliderEvent() {
  return (
    <div className={styles.container}>
      <div>
        <h1>WORKSHOPS</h1>
      </div>
      <div className={styles.slider} style={{}}>
        <div className={styles.list}>
          <div className={styles.item} style={{ "--position": "0s" }}>
            <img src={image1} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "1s" }}>
            <img src={image2} alt="" />
          </div>

          <div className={styles.item} style={{ "--position": "2s" }}>
            <img src={image3} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "3s" }}>
            <img src={image4} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "4s" }}>
            <img src={image5} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "5s" }}>
            <img src={image6} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "6s" }}>
            <img src={image7} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "7s" }}>
            <img src={image8} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "8s" }}>
            <img src={image9} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.btn}></div>
    </div>
  );
}

export default BannerSliderEvent;
