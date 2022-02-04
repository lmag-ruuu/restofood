import { NextPage } from "next";
import classes from "./NewsLetter.module.css";
import SubHeading from "../SubHeading/SubHeading";

const NewsLetter: NextPage = () => {
  return (
    <div className={classes["app__newsletter"]}>
      <div className={classes["app__newsletter-heading"]}>
        <SubHeading subTitle="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className={`${classes["app__newsletter-input"]} flex__center`}>
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
