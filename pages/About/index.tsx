import { NextPage } from "next";
import Image from "next/image";
import classes from "./About.module.css";
import G from "../../public/static/G.png";
import spoon from "../../public/static/spoon.png";

const About: NextPage = () => {
  return (
    <div
      className={`${classes["app__aboutus"]} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${classes["app__aboutus-overlay"]} flex__center`}>
        <Image src={G} alt="G Letter" />
      </div>
      <div className={`${classes["app__aboutus-content"]} flex__center`}>
        <div className={classes["app__aboutus-content_about"]}>
          <h1 className="headtext__cormorant">About Us</h1>
          <Image src={spoon} alt="about_spoon img" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
