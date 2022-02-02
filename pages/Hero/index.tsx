import { NextPage } from "next";
import classes from "./Hero.module.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import Image from "next/image";
import welcome from "../../public/static/welcome.png";

const Header: NextPage = () => {
  return (
    <div
      id="home"
      className={`${classes["app__header"]} app__wrapper section__padding`}
    >
      <div className={classes["app__wrapper_info"]}>
        <SubHeading subTitle="Chase The new flavour" />
        <h1 className={classes["app__header-h1"]}>The Key to Fine Dining</h1>
        <p className="p__opensans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className={classes["app__wrapper_img"]}>
        <Image
          src={welcome}
          alt="header img, salad food"
          className="image-header"
        />
      </div>
    </div>
  );
};

export default Header;
