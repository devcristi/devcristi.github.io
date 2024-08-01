import React from "react";
import styles from "./TransitionPage.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef

 } from "react";
const TransitionPage = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"],
    });
    const md = useTransform(scrollYProgress, [0, 1], [0, -400]);

    const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const md2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const lg2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const lg3 = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return(
        <motion.div className={styles.wrapper} style={{ y:sm, overflow:"hidden" }} initial={{ y: 0 }} id="about">
            <motion.h1 style={{ y: sm }} initial={{ y: 0 }}>HI, I’M CRISTI!</motion.h1>
            <motion.h1 style={{ y: lg }} initial={{ y: 0 }}>YOUNG & CREATIVE</motion.h1>
            <motion.h1 style={{ y: lg }} initial={{ y: 0 }}>STUDENT, DEVELOPER</motion.h1>
            <motion.div style={{ y: sm }} initial={{ y: 0 }} className={styles.img}></motion.div>
            <motion.div style={{ y: lg }}  initial={{ y: 0 }} className={styles.left}>
                <h1>I’M STUDYING</h1>
            </motion.div>
            <motion.div style={{ y: lg }} initial={{ y: 0 }} className={styles.right}>
                <h1>AUTOMATION AND CS</h1>
                <h1>AT UNITBV</h1>
            </motion.div>
        </motion.div>
    );
};

export default TransitionPage;