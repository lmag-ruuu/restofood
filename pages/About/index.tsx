import { NextPage } from "next";
import Image from "next/image";
import G from "../../public/static/G.png";
import classes from "./About.module.css";

const About: NextPage = () => {
  return (
    <div
      className={`${classes["app__aboutus"]} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${classes["app__aboutus-overlay"]} flex__center`}>
        <Image src={G} alt="G Letter" />
      </div>
    </div>
  );
};

export default About;
