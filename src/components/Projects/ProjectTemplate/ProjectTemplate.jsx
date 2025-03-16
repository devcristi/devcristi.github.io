import React, { useRef } from "react";
import styles from "./ProjectTemplate.module.css";
import Navbar from "../../Navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Footer from "../../Contact/Contact";
import { FaGithub } from "react-icons/fa";

const ProjectTemplate = ({ title, subheading, imgSrc, imgClassName, text, textp1, textp2, textp3, textp4, text2, img1, img2, img3, img4, githubLink, future_things, live}) => {
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
                        <img src={imgSrc} alt={title ? title : "Project Main"} className={imgClassName || ""} />
                    </motion.div>
                    </div>
                    <p className={styles.subheading}>{subheading}</p>
                    {githubLink && (
                        <a 
                            href={githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.githubLink}
                        >
                           View on GitHub
                          <FaGithub style={{ marginLeft: "8px", verticalAlign: "middle" }} />
                        </a>
                    )}
                    {live && (
                        <a 
                            href={live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.githubLink}
                        >
                           Live preview
                        </a>
                    )}
                </div>
            </div>
            <div className={styles.spacer}>
                <div className={styles.gallery}>
                    <motion.div className={styles.img}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.content}>
                            {img1 && <motion.img src={img1} alt="Image 1"
                                 initial={{ scale: 0.9 }}
                                 whileHover={{ scale: 1 }}
                                 transition={{
                                     type: "spring",
                                     stiffness: 300,
                                     damping: 10
                                 }}
                                 />}
                            <div className={styles.textp}>{textp1}</div>
                        </div>
                    </motion.div>
                    <motion.div className={styles.img}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.content}>
                            {img2 && <motion.img src={img2} alt="Image 2"
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }}
                            />}
                            <div className={styles.textp}>{textp2}</div>
                        </div>
                    </motion.div>
                    <motion.div className={styles.img}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.content}>
                            {img3 && <motion.img src={img3} alt="Image 3"
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }}
                                />}
                            <div className={styles.textp}>{textp3}</div>
                        </div>
                    </motion.div>
                    {future_things && (
                        <div className={styles.text_soon}>
                            {future_things}
                        </div>
                    )}
                                
                </div>
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
                    {githubLink && (
                        <a 
                            href={githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.githubLink}
                            >
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>
            <div className={styles.spacer2}>
                <div className={styles.gallery}>
                    <motion.div className={styles.img}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        >
                        <div className={styles.content}>
                            {img1 && <motion.img src={img1} alt="Image 1"
                                 initial={{ scale: 0.9 }}
                                 whileHover={{ scale: 1 }}
                                 transition={{
                                     type: "spring",
                                     stiffness: 300,
                                     damping: 10
                                 }}
                            />}
                        </div>
                    </motion.div>
                    <div className={styles.textp}>{textp1}</div>
                    <motion.div className={styles.img}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.content}>
                            {img2 && <motion.img src={img2} alt="Image 2"
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }}
                            />}
                        </div>
                    </motion.div>
                    <div className={styles.textp}>{textp2}</div>
                    <motion.div className={styles.img}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.content}>
                            {img3 && <motion.img src={img3} alt="Image 3"
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }}
                            />}
                        </div>
                    </motion.div>
                    <div className={styles.textp}>{textp3}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectTemplate;
