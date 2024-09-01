import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BannerAbout from "./BannerAbout";
import BannerContactUs from "./BannerContactUs";
import BannerEvent from "./BannerEvent";
import BannerSliderEvent from "./BannerSliderEvent";
import Head from "./Head";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head />
      <BannerAbout />
      <BannerEvent />
      <div className={styles.banner}>
        <BannerSliderEvent />
      </div>
      <BannerContactUs />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
