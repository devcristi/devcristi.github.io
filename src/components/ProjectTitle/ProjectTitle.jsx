import React from "react";
import styles from './ProjectTitle.module.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useRef } from "react";
import { motion,  useScroll } from "framer-motion";

const ProjectTitle = () => {
    const container = useRef(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end start"],

    })
    return (
        <div ref={container} className={styles.wrapper}>
            <div className={styles.text}>
                <h1>projects</h1>
                <div className={styles.textfooter}>
                    <p>customer projects, personal projects</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectTitle;