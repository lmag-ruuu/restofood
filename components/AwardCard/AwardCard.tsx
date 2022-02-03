import { NextPage } from "next";

interface Award {
  title: string;
  imgPathName: string;
  subTitle: string;
}

const AwardCard: NextPage<Award> = ({ title, imgPathName, subTitle }) => {
  return <div></div>;
};

export default AwardCard;
