import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import Button from "../Button/Buttonb.jsx";

const Contact = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const md2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const lg2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -500]);

    const handleCopyEmail = () => {
        const email = "someone@example.com";
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy email: ", err);
        });
    };

    return (
        <motion.div className={styles.wrapper} ref={container} style={{ y: lg, overflow: "hidden" }} initial={{ y: 0 }} id="contact">
            <div className={styles.contactform}>
                <div className={styles.effect}></div>
                <div className={styles.footer}>
                    <div className={styles.name}>
                        <h1>©DevCristi</h1>
                    </div>
                    <div className={styles.media}>
                        <ul>
                            <Button onClick={handleCopyEmail}>Email</Button>
                            <Button href="https://www.linkedin.com/in/cristian-daniel-boabes/" target="_blank">LinkedIn</Button>
                            <Button href="https://github.com/devcristi" target="_blank">GitHub</Button>
                            <Button href="https://codepen.io/devcristi" target="_blank">CodePen</Button>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
