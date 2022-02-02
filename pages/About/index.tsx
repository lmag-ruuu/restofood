import { NextPage } from "next";
import Image from "next/image";
import classes from "./About.module.css";
import G from "../../public/static/G.png";
import spoon from "../../public/static/spoon.png";
import knife from "../../public/static/knife.png";

const About: NextPage = () => {
  return (
    <div
      className={`${classes["app__aboutus"]} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${classes["app__aboutus-overlay"]} flex__center`}>
        <Image
          src={G}
          alt="G Letter"
          className={classes["GLetter"]}
          width={391}
          height={415}
        />
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

        <div
          className={`${classes["app__aboutus-content_knife"]} flex__center`}
        >
          <Image
            src={knife}
            layout="fill"
            alt="cooking knife image"
            className={classes["knife-img"]}
            objectFit="scale-down"
          />
        </div>

        <div className={classes["app__aboutus-content_history"]}>
          <h1 className="headtext__cormorant">Our History</h1>
          <Image src={spoon} alt="about_spoon img" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
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
