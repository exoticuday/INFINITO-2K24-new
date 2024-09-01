import { SlLocationPin } from "react-icons/sl";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import "./NaBar2.css";
const footer = () => {
  return (
    <div className="footerouter">
      <div className="footerinner1">
        <SlLocationPin id="location" />
        <a href="https://www.google.co.in/maps/place/Indian+Institute+of+Technology,+Patna/@25.5356496,84.8487217,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed577f6954a4ab:0x6ce8f1b9fc2aa02a!8m2!3d25.5356448!4d84.8512966!16s%2Fm%2F04n5dz1?hl=en&entry=ttu">
          IIT, Bihta Kanpa Rd, Patna, Dayalpur Daulatpur, Bihar 801106
        </a>
      </div>

      <div className="footerinner3">
        <a href="#">
          <SlEnvolopeLetter />
        </a>
        <a href="#">events.infinito@iitp.ac.in</a>
      </div>
      <div className="footerinner2">
        <a href="https://www.instagram.com/infinito_iitp/?hl=en">
          <FaSquareInstagram />
        </a>
        <a href="https://in.linkedin.com/company/infinito-iit-patna">
          <FaLinkedin />
        </a>
        <a href="https://x.com/infinito_iitp?lang=en">
          <FaSquareTwitter />
        </a>
        <a href="https://www.youtube.com/c/infinitoiitp">
          <FaSquareYoutube />
        </a>
      </div>
    </div>
  );
};

export default footer;
