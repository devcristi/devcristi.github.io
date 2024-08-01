import React from "react";
import styles from "./Preloader.module.css";
import {motion} from "framer-motion";
import { slideUp } from "./anim";
const Preloader = () => {
    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.preloader}>
            <div className={styles.text}>
               <h1>Loading...</h1>
               <p>This site is under development</p>
            </div>
        </motion.div>
    );
};

export default Preloader;