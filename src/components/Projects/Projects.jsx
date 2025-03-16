import React, { useRef } from "react";
import styles from "./Projects.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import sport from "./sport.svg";
import selfdrivingcar from "./selfdrivingcar.png";
import brasov from "./brasov.jpg";
import dev from "./dev.jpg";
import british from "./british.jpg";
import { Link } from "react-router-dom";
import prostata from "./Prostate/10015_1000015_t2w_slice_4-removebg-preview.png";
import absoluto from "./Absoluto/absoluto-bjj-international.png";
import robot from "./Robot/img1.jpg";
const Projects = () => {
    const ProjectLink = ({ heading, subheading, imgSrc, href }) => {
        const ref = useRef(null);

        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const xSpring = useSpring(x);
        const ySpring = useSpring(y);

        const top = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"]);
        const left = useTransform(xSpring, [0.5, -0.5], ["80%", "90%"]);
        //!mouse move
        const handleMouseMove = (e) => {
            const rect = ref.current.getBoundingClientRect();

            const width = rect.width;
            const height = rect.height;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;

            x.set(xPct);
            y.set(yPct);
        }

        return (
            <div className={styles.projectwrapper} id="projects">
                <motion.a href={href} ref={ref}
                    initial="initial"
                    onMouseMove={handleMouseMove}
                    whileHover="whileHover"
                >
                    <div className={styles.project}>
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: -16 },
                            }}
                            transition={{
                                type: "spring",
                                delayChildren: 0.25,
                                staggerChildren: 0.05,
                            }}
                            className={styles.heading}
                        >
                            {heading.split("").map((l, i) => {
                                return l === " " ? (
                                    <span key={`space-${i}`}>&nbsp;</span>
                                ) : (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            initial: { x: 0 },
                                            whileHover: { x: 16 },
                                        }}
                                        transition={{ type: "spring" }}
                                        className={styles.letter}
                                    >
                                        {l}
                                    </motion.span>
                                );
                            })}
                        </motion.span>
                        <span className={styles.subheading}>{subheading}</span>
                    </div>

                    <motion.img className={styles.img}
                        variants={{
                            initial: {
                            scale: 0,
                            rotate: '-12.5deg',
                            },
                            whileHover: {
                                scale: 1,
                                rotate: '12.5deg',
                            },
                        }}
                        transition={{
                            type: "spring",
                        }}
                        style={{
                            top, //50
                            left, //85
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        src={imgSrc}
                        alt={'Image representing a ProjectLink for' + heading}
                    />
                    <motion.div className={styles.arrow}
                        variants={{
                            initial: {
                                x: "25%",
                                opacity: 0,
                            },
                            whileHover: {
                                x: "0",
                                opacity: 1,
                            },
                        }}
                        transition={{
                            type: "spring",
                        }}
                    >
                        <FiArrowUpRight />
                    </motion.div>
                </motion.a>
            </div>
        );
    };
    return (
        <div className={styles.projectcontainer}>
            <Link to="/prostate">
                <ProjectLink
                    heading="tumorxplorer"
                    subheading="PyTorch | PI-CAI Dataset | Attention UNet"
                    imgSrc={prostata}
                    />
            </Link>
            <Link to="/britishcamps">
                <ProjectLink
                    heading="british camps ro"
                    subheading="Marketing Developer | Apr 2024 -Jun 2024"
                    imgSrc={british}
                    href="#"
                />
            </Link>
            <Link to="/absoluto">
                <ProjectLink
                    heading="abjsoluto bjj"
                    subheading="React.js | Java SpringBoot | MySql"
                    imgSrc={absoluto}
                    href="#"
                />
            </Link>
            <Link to="/sport">
                <ProjectLink
                    heading="prezente sport"
                    subheading="React.js | Java SpringBoot | MySql"
                    imgSrc={sport}
                    />
            </Link>
            <Link to="/robot">
                <ProjectLink
                    heading="3d printend tank"
                    subheading="ESP32 | C++ | Fusion 360 | PID control | 3D Printing"
                    imgSrc={robot}
                    />
            </Link>
            <Link to="/selfdrivingcar">
                <ProjectLink
                    heading="self driving car"
                    subheading="Vanilla Javascript | Under development"
                    imgSrc={selfdrivingcar}
                    href="#"
                />
            </Link>
            <Link to="/brasov">
                <ProjectLink
                    heading="brasov"
                    subheading="Next.js | GSAP"
                    imgSrc={brasov}
                    href="#"
                />
            </Link>
            <Link to ="/devcristi">
                <ProjectLink
                    heading="portfolio v1"
                    subheading="HTML | CSS | Javascript"
                    imgSrc={dev}
                    href="#"
                />
            </Link>
        </div>
    );
};

export default Projects;