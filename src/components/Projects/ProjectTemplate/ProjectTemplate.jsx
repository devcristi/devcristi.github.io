import React, { useRef } from "react";
import styles from "./ProjectTemplate.module.css";
import Navbar from "../../Navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const ProjectTemplate = ({ title, subheading, imgSrc, text, img1 }) => {
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
            {/* <div className={styles.gallery}>
                <div className={styles.titleg}>
                    <h1>Gallery</h1>
                </div>
                <div className={styles.gallerycontainer}>
                    {img1 && <img src={img1} alt={title ? "Gallery for " + title : "Gallery"} className={styles.galleryimg} />}
                </div>
            </div> */}
        </div>
    );
};

export default ProjectTemplate;
