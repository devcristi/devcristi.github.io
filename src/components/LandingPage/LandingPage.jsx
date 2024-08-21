import React, { useRef } from "react";
import styles from "./LandingPage.module.css";
import Spline from "@splinetool/react-spline";
import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../Button/Button";
import { HashLink as Link } from 'react-router-hash-link';

const LandingPage = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const md2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const lg2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className={styles.landingpage} >
      <div className={styles.wrapper} ref={container} id="home">
        <div className={styles.section}>
          <motion.h1 style={{ y: md }} initial={{ y: 0 }}>
            AESTHETIC DIGITAL
          </motion.h1>
          <motion.h1 style={{ y: md }} initial={{ y: 0 }}>
            EXPERIENCES
          </motion.h1>
          <motion.div className={styles.right} style={{ y: lg }} initial={{ y: 0 }}>
            <h1>MADE BY A 2000’S</h1>
          </motion.div>
          <div className={styles.center}>
            <motion.h1 style={{ y: md2 }} initial={{ y: 0 }}>
              PASSIONATE
            </motion.h1>
            <motion.h1 style={{ y: lg2 }} initial={{ y: 0 }}>
              JUNIOR.
            </motion.h1>
          </div>
            <div className={styles.splinecontainer}>
                <div className={styles.spline}>
                <Spline className={styles.spline} scene="https://prod.spline.design/DnRlVEPFH6n-DfxT/scene.splinecode" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;