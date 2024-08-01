import React from "react";
import styles from "./ParallaxText.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

const ParallaxText = () => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    const baseVelocity = 1;

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

         if (velocityFactor.get() >= 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);

        // console.log(`baseX: ${baseX.get()}, moveBy: ${moveBy}, velocityFactor: ${velocityFactor.get()}`);
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.sliderContainer}>
                <motion.div className={styles.slider} style={{ x }}>
                    <h1 className={styles.text1}>open to work | </h1>
                    <h1 className={styles.text1}>open to work | </h1>
                    <h1 className={styles.text1}>open to work | </h1>
                    <h1 className={styles.text2}>open to work | </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default ParallaxText;
