import { NextPage } from "next";
import NextImage from "next/image";
import classes from "./AwardCard.module.css";

interface Award {
  title: string;
  imgPathName: string;
  subTitle: string;
}

const AwardCard: NextPage<Award> = ({ title, imgPathName, subTitle }) => {
  return (
    <div className={classes["app__laurels_awards-card"]}>
      <div className={classes["img__award-container"]}>
        <NextImage
          src={`/static/${imgPathName}.png`}
          width={80}
          height={80}
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
