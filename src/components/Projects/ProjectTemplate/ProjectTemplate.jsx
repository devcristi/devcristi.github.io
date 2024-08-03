import React, { useRef } from "react";
import styles from "./ProjectTemplate.module.css";
import Navbar from "../../Navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const ProjectTemplate = ({ title, subheading, imgSrc, text, text2, img1 }) => {
    const projectTemplateRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: projectTemplateRef,
        offset: ["start start", "end end"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
        <div className={styles.wrapper}>
            <ScrollToTop />
            <div className={styles.projectTemplate} ref={projectTemplateRef}>
                <Navbar />
                <div className={styles.sticky}>
                    <div className={styles.el}>
                        <motion.div className={styles.imgcontainer} style={{ scale }}>
                            <img src={imgSrc} alt={title ? title : "Project Main"} />
                        </motion.div>
                    </div>
                    <p className={styles.subheading}>{subheading}</p>
                </div>
            </div>
            <div className={styles.spacer}>
                <div className={styles.text}>{text}</div>
            </div>

            <div className={styles.projectTemplate2} ref={projectTemplateRef}>
                <Navbar />
                <div className={styles.sticky}>
                    <div className={styles.el}>
                        <div className={styles.imgcontainer2}>
                            <img src={imgSrc} alt={title ? title : "Project Main"} />
                        </div>
                    </div>
                    <p className={styles.subheading}>{subheading}</p>
                </div>
            </div>
            <div className={styles.spacer2}>
                <div className={styles.text2}>{text2}</div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
