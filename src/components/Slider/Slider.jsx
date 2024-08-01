import React from "react";
import ParallaxText from "./ParallaxText";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <ParallaxText text="React | Framer Motion | " />
      <ParallaxText text="Java SpringBoot | MySql | " />
      <ParallaxText text="Open to work | " />
    </div>
  );
};

export default Slider;
