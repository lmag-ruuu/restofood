import { NextPage } from "next";
import classes from "./Footer.module.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverLay from "../../components/Footer/FooterOverlay";
import NewsLetter from "../../components/Footer/NewsLetter";

const Footer: NextPage = () => {
  return (
    <div className={`${classes["app__footer"]} section__padding`}>
      <FooterOverLay />
      <NewsLetter />
    </div>
  );
};

export default Footer;
