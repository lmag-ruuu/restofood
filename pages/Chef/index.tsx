import { NextPage } from "next";
import NextImage from "next/image";
import SubHeading from "../../components/SubHeading/SubHeading";
import classes from "./Chef.module.css";
import chefImg from "../../public/static/chef.png";
import quoteImg from "../../public/static/quote.png";
import signImg from "../../public/static/sign.png";

const Chef: NextPage = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <NextImage src={chefImg} alt="chef photo" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading subTitle="Chef’s Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className={classes["app__chef-content"]}>
          <div className={classes["app__chef-content_quote"]}>
            <div className={classes["quote__img"]}>
              <NextImage src={quoteImg} alt="Open quote img" />
            </div>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className={classes["app__chef-sign"]}>
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef and Founder</p>
          <div className={classes["sign__img"]}>
            <NextImage src={signImg} alt="image sign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
