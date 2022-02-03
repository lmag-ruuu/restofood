import { NextPage } from "next";
import classes from "./Menuitem.module.css";

interface ItemMenu {
  title: string;
  tags: string;
  price: string;
}

const MenuItem: NextPage<ItemMenu> = ({ title, tags, price }) => {
  return (
    <div className={classes["app__menuitem"]}>
      <div className={classes["app__menuitem-head"]}>
        <div className={classes["app__menuitem-name"]}>
          <p className="p__cormorant">{title}</p>
        </div>

        <div className={classes["app__menuitem-dash"]} />

        <div className={classes["app__menuitem-price"]}>
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className={classes["app__menuitem-sub"]}>
        <p className="p__opensans">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
