import { NextPage } from "next";
import NextImage from "next/image";
import SubHeading from "../../components/SubHeading/SubHeading";
import classes from "./SpecialMenu.module.css";
import wines from "../../src/wines";
import cocktails from "../../src/cocktails";
import menu from "../../public/static/menu.png";
import MenuItem from "../../components/Menuitem/Menuitem";

const SpecialMenu: NextPage = () => {
  return (
    <div
      className={`${classes["app__specialMenu"]} flex__center section__padding`}
      id="menu"
    >
      <div className={classes["app__specialMenu-title"]}>
        <SubHeading subTitle="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
      {/* Container menu */}
      <div className={classes["app__specialMenu-menu"]}>
        {/* MENU WINE */}
        <div
          className={`${classes["app__specialMenu-menu_wine"]} flex__center`}
        >
          <p className={classes["app_specialMenu-menu_heading"]}>
            Wine &amp; Beer
          </p>
          <div className={classes["app_specialMenu_menu_items"]}>
            {wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
              />
            ))}
          </div>
        </div>
        {/* Image */}
        <div className={classes["app__specialMenu-menu_img"]}>
          <NextImage
            src={menu}
            alt="Menu image"
            width={410}
            height={620}
            layout="responsive"
          />
        </div>
        {/* Cocktails */}
        <div
          className={`${classes["app__specialMenu-menu_cocktail"]} flex__center`}
        >
          <p className={classes["app_specialMenu-menu_heading"]}>Cocktails</p>
          <div className={classes["app_specialMenu_menu_items"]}>
            {cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                tags={cocktail.tags}
                price={cocktail.price}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Btn */}
      <div className={classes["div-btn"]}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
