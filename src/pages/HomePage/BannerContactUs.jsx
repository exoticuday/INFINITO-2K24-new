import styles from "./BannerContactUs.module.css";

function BannerContactUs() {
  function handleClick(e) {
    e.preventdefault();
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>CONTACT US</h1>
      <form action="?/feedback" method="post">
        <div className={styles.inputField}>
          <input type="text" required spellCheck="false" />
          <label>Enter Your Name</label>
        </div>
        <div className={styles.inputField}>
          <input type="email" required spellCheck="false" />
          <label>Enter Your Email</label>
        </div>
        <textarea
          className={styles.textArea}
          style={{ backgroundColor: "black" }}
          name="body"
          type="text"
          placeholder="Feedback"
          required
        ></textarea>
        <button onClick={handleClick} className={styles.btn}></button>
      </form>
    </div>
  );
}

export default BannerContactUs;
