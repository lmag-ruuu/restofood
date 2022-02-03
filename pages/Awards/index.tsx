import { NextPage } from "next";
import NextImage from "next/image";
import SubHeading from "../../components/SubHeading/SubHeading";
import awards from "../../src/awards";
import classes from "./Awards.module.css";
import AwardCard from "../../components/AwardCard/AwardCard";
import laurels from "../../public/static/laurels.png";

const Awards: NextPage = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading subTitle="Awards &amp; recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className={classes["app__laurels_awards"]}>
          {awards.map((award, index) => (
            <AwardCard
              key={award.title + index}
              title={award.title}
              subTitle={award.subtitle}
              awardImg={award.awardImg}
            />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <div className={classes["app__awards-image"]}>
          <NextImage src={laurels} alt="laurels image" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
