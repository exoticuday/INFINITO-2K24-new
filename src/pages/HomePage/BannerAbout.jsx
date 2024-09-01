import styles from "./BannerAbout.module.css";

function BannerAbout() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        ABOUT
        <span>INFINITO</span>
      </h1>
      <p>
        Petrichor- the annual techno-cultural fest of IIT Palakkad is back
        again, and better than ever before. Also, yes,s offline. We, the
        students of IIT Palakkad, conduct Petrichor every year, and made sure
        last years event was enthralling for all its participants. Now the wait
        is over; with just the perfect mix of cultural and technical events, we
        plan on making Petrichor 24 an unforgettable experience for you. Trust
        us when we say that you miss out on anything. Check out our website as
        it has answers to all the questions that you might have. Stay tuned and
        brace yourselves for the journey of a lifetime with Petrichor 24!
      </p>
    </div>
  );
}

export default BannerAbout;
