import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import NextImage from "next/image";
import classes from "./Navbar.module.css";
import geritch from "../../public/static/gericht.png";

const Navbar = () => {
  return (
    <NextImage
      src={geritch}
      alt="y si me chupas la polla next/image?"
      width={120}
      height={120}
    />
  );
};

export default Navbar;
