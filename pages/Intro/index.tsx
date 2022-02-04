import { NextPage } from "next";
import { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import classes from "./Intro.module.css";

const Intro: NextPage = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevState) => !prevState);

    if (vidRef.current) {
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };

  return (
    <div className={classes["app__video"]}>
      <video autoPlay loop controls={false} muted ref={vidRef}>
        <source src="/static/meal.mp4" />
      </video>
      <div className={`${classes["app__video-overlay"]} flex__center`}>
        <div
          className={`${classes["app__video-overlay_circle"]} flex__center`}
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
