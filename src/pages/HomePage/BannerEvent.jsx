import styles from "./BannerEvent.module.css";

function BannerEvent() {
  return (
    <div className={styles.container}>
      <h1>EVENTS</h1>
      <div className={styles.slid} style={{ display: "flex" }}>
        <a
          href="#"
          className={styles.event}
          style={{ backgroundImage: `url("./../../../public/dj.jpg")` }}
        >
          CULTURAL
        </a>
        <a
          className={styles.event}
          href="#"
          style={{ backgroundImage: `url("./../../../public/game.png")` }}
        >
          TECHNICAL
        </a>
        <a
          className={styles.event}
          href="#"
          style={{ backgroundImage: `url("./../../../public/robot.jpg")` }}
        >
          INFORMALS
        </a>
      </div>
    </div>
  );
}

export default BannerEvent;
