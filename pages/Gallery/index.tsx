import { NextPage } from "next";
import NextImage from "next/image";
import SubHeading from "../../components/SubHeading/SubHeading";
import classes from "./Gallery.module.css";
import imagesGallery from "../../src/gallery";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { useRef } from "react";

const Gallery: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft + -300;
      }
    }
  };

  return (
    <div className={`${classes["app__gallery"]} flex__center`}>
      <div className={classes["app__gallery-content"]}>
        <SubHeading subTitle="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      {/* Gallery */}
      <div className={classes["app__gallery-images"]}>
        <div
          className={classes["app__gallery-images_container"]}
          ref={scrollRef}
        >
          {imagesGallery.map((image, index) => (
            <div
              key={`gallery_image-${index + 1}`}
              className={`${classes["app__gallery-images_card"]} flex__center`}
            >
              <div className={classes['"app__gallery-image_container']}>
                <NextImage src={image} alt="image gallery" />
              </div>
              <BsInstagram className={classes["gallery__image-icon"]} />
            </div>
          ))}
        </div>
        <div className={classes["app__gallery-images_arrow"]}>
          <BsArrowLeftShort
            className={classes["gallery__arrow-icon"]}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={classes["gallery__arrow-icon"]}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
