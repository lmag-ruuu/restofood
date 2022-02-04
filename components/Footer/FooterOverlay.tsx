import { NextPage } from "next";
import classes from "./FooterOverlay.module.css";

const FooterOverLay: NextPage = () => {
  return (
    <div className={classes["app__footerOverlay"]}>
      <div className={classes["app__footerOverlay-black"]} />
      <div className={`${classes["app__footerOverlay-img"]} app__bg`} />
    </div>
  );
};

export default FooterOverLay;
