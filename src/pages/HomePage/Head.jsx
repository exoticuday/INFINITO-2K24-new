import styles from "./Head.module.css";
import video from "./../../../public/afterVideo.mp4";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className={styles.container}>
      <video className={styles.video} src={video} autoPlay loop muted />
      <div className={styles.title}>
        <div className={styles.imgparent}></div>
        <div className={styles.tit}>
          <div>
            <h1 className={styles.atmos}>INFINITO</h1>
            <h1 className={styles.atmos}>2025</h1>
          </div>
          <div className={styles.bupal}>
            <Link to="/event" className={styles.cool}>
              <span style={{ zIndex: "1" }}>Explore Now</span>
            </Link>
            <a href="#" className={styles.cool}>
              <span style={{ zIndex: "1" }}>Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
