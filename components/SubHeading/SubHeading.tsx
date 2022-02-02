import spon from "../../public/static/spoon.png";
import NextImage from "next/image";
import classes from "./SubHeading.module.css";
import { NextPage } from "next";

interface titleProps {
  subTitle: string;
}

const SubHeading: NextPage<titleProps> = ({ subTitle }) => {
  return (
    <div className={classes.subheading}>
      <p className="p__cormorant">{subTitle}</p>
      <div className={"spoon_img"}>
        <NextImage src={spon} alt={"spoon"} />
      </div>
    </div>
  );
};

export default SubHeading;
