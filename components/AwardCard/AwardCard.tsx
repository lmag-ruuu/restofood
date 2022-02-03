import { NextPage } from "next";
import NextImage from "next/image";
import classes from "./AwardCard.module.css";

interface Award {
  title: string;
  awardImg: StaticImageData;
  subTitle: string;
}

const AwardCard: NextPage<Award> = ({ title, awardImg, subTitle }) => {
  return (
    <div className={classes["app__laurels_awards-card"]}>
      <div className={classes["img__award-container"]}>
        <NextImage
          src={awardImg}
          layout="fixed"
          width={50}
          height={50}
          alt="award"
        />
      </div>
      <div className={classes["app__laurels_awards-card_content"]}>
        <p className="p__cormorant">{title}</p>
        <p className="p__cormorant">{subTitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
