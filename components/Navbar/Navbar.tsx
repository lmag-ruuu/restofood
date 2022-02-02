import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import NextImage from "next/image";
import classes from "./Navbar.module.css";
import geritch from "../../public/static/gericht.png";
import Link from "next/link";
import { useState } from "react";

const menu = ["Home", "About", "Menu", "Awards", "Contact"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleBtn = () => {
    setToggleMenu((prevState) => !prevState);
  };

  const menuList = menu.map((menuItem, index) => {
    return (
      <li key={index} className="p__opensans">
        <Link href={`#${menuItem.toLocaleLowerCase()}`}>{menuItem}</Link>
      </li>
    );
  });

  return (
    <nav className={classes["app__navbar"]}>
      <div className={classes["app__navbar-logo"]}>
        <NextImage
          layout="intrinsic"
          src={geritch}
          alt="app logo"
          width={150}
          height={65}
        />
      </div>
      <ul className={classes["app__navbar-links"]}>{menuList}</ul>
      <div className={classes["app__navbar-login"]}>
        <Link href={"#login"}>
          <a className="p__opensans">Log In / Register</a>
        </Link>
        <div />
        <Link href={"/"}>
          <a className="p__opensans">Book Table</a>
        </Link>
      </div>
      <div className={classes["app__navbar-smallscreen"]}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={toggleBtn} />
        {toggleMenu && (
          <div
            className={`${classes["app__navbar-smallscreen_overlay"]} flex__center slide-bottom`}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className={classes["overlay__close"]}
              onClick={toggleBtn}
            />
            <ul className={classes["app__navbar-smallscreen-links"]}>
              {menuList}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
