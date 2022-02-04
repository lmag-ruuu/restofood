import { NextPage } from "next";
import NextImage from "next/image";
import classes from "./Footer.module.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverLay from "../../components/Footer/FooterOverlay";
import NewsLetter from "../../components/Footer/NewsLetter";
import geritch from "../../public/static/gericht.png";
import spoon from "../../public/static/spoon.png";

const Footer: NextPage = () => {
  return (
    <footer className={`${classes["app__footer"]} section__padding`}>
      <FooterOverLay />
      <NewsLetter />

      <div className={classes["app__footer-links"]}>
        <div className={classes["app__footer-links_contact"]}>
          <h1 className={classes["app__footer-headtext"]}>Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className={classes["app__footer-links_logo"]}>
          <div className={classes["app__footer-img_logo"]}>
            <NextImage src={geritch} alt="geritch logo image" layout="fill" />
          </div>
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <div className={classes["spoon__container"]}>
            <NextImage src={spoon} alt="spoon logo" />
          </div>
          <div className={classes["app__footer-links_icons"]}>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className={classes["app__footer-links_work"]}>
          <h1 className={classes["app__footer-headtext"]}>Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am -11:00 pm</p>
        </div>
      </div>
      <div className={classes["footer__copy"]}>
        <p className="p__opensans">&copy; 2021 Gerícht. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
