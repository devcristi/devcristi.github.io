import React, { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./TransitionPage.module.css";

const TransitionPage = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    // Optional: Function to resize text dynamically
    // useEffect(() => {
    //     const resizeText = () => {
    //         const container = containerRef.current;
    //         const textElements = container?.querySelectorAll('h1');

    //         if (textElements) {
    //             textElements.forEach(text => {
    //                 const containerWidth = container.offsetWidth;
    //                 let min = 1;
    //                 let max = 2500;

    //                 while (min <= max) {
    //                     const mid = Math.floor((min + max) / 2);
    //                     text.style.fontSize = mid + "px";

    //                     if (text.offsetWidth <= containerWidth) {
    //                         min = mid + 1;
    //                     } else {
    //                         max = mid - 1;
    //                     }
    //                 }

    //                 text.style.fontSize = max + "px";
    //             });
    //         }
    //     };

    //     resizeText();

    //     window.addEventListener("resize", resizeText);

    //     return () => {
    //         window.removeEventListener("resize", resizeText);
    //     };
    // }, []);

    return (
        <div className={styles.big}>
            <motion.div className={styles.wrapper} style={{ y: sm, overflow: "hidden" }} initial={{ y: 0 }} id="about">
                <motion.h1 style={{ y: sm }} initial={{ y: 0 }}>HI, I’M CRISTI!</motion.h1>
                <motion.h1 style={{ y: lg }} initial={{ y: 0 }}>YOUNG & CREATIVE</motion.h1>
                <motion.h1 className={styles.probl} style={{ y: lg }} initial={{ y: 0 }}>STUDENT, DEVELOPER</motion.h1>
                <motion.div style={{ y: sm }} initial={{ y: 0 }} className={styles.img}></motion.div>
                <motion.div style={{ y: lg }} initial={{ y: 0 }} className={styles.left}>
                    <h1>I’M STUDYING</h1>
                </motion.div>
                <motion.div style={{ y: lg }} initial={{ y: 0 }} className={styles.right}>
                    <h1>AUTOMATION AND CS</h1>
                    <h1>AT UNITBV</h1>
                </motion.div>
            </motion.div>
            <div className={styles.wrapper2} style={{ y: sm, overflow: "hidden" }} initial={{ y: 0 }} id="about">
                <h1 style={{ y: sm }} initial={{ y: 0 }}>HI, I’M CRISTI!</h1>
                <h1 style={{ y: lg }} initial={{ y: 0 }}>YOUNG & CREATIVE</h1>
                <h1 className={styles.probl2} style={{ y: lg }} initial={{ y: 0 }}>STUDENT, DEVELOPER</h1>
                <div style={{ y: sm }} initial={{ y: 0 }} className={styles.img2}></div>
                <div style={{ y: lg }} initial={{ y: 0 }} className={styles.left2}>
                    <h1>I’M STUDYING</h1>
                </div>
                <div style={{ y: lg }} initial={{ y: 0 }} className={styles.right2}>
                    <h1>AUTOMATION AND CS</h1>
                    <h1>AT UNITBV</h1>
                </div>
            </div>
        </div>
    );
};

export default TransitionPage;
