import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import NextImage from "next/image";
import classes from "./Navbar.module.css";
import geritch from "../../public/static/gericht.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleBtn = () => {
    setToggleMenu((prevState) => !prevState);
  };

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
      <ul className={classes["app__navbar-links"]}>
        <li className="p__opensans">
          <Link href={"#home"}>Home</Link>
        </li>
        <li className="p__opensans">
          <Link href={"#about"}>About</Link>
        </li>
        <li className="p__opensans">
          <Link href={"#menu"}>Menu</Link>
        </li>
        <li className="p__opensans">
          <Link href={"#awards"}>Awards</Link>
        </li>
        <li className="p__opensans">
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
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
              <li className="p__opensans">
                <Link href={"#home"}>Home</Link>
              </li>
              <li className="p__opensans">
                <Link href={"#about"}>About</Link>
              </li>
              <li className="p__opensans">
                <Link href={"#menu"}>Menu</Link>
              </li>
              <li className="p__opensans">
                <Link href={"#awards"}>Awards</Link>
              </li>
              <li className="p__opensans">
                <Link href={"#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
