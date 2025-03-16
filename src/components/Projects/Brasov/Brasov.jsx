import React, { useRef } from "react";
import styles from "./Brasov.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import brasov from "../brasov.jpg";
import sport1 from "./img1.jpeg";
import sport2 from "./img2.png";
import sport3 from "./img3.png";
const Brasov = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="brasov"
            imgSrc={brasov}
            img1={sport1}
            img2={sport2}
            img3={sport3}
            githubLink={"https://github.com/devcristi/proiect-next-loco"}
            live = {"https://devcristi.github.io/proiect-next-loco/"}

            textp1={
                <>
                    <p>
                        In this project I've tryed to create a more visual oriented website with some images from Brasov.
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        I've used Next.js, Locomotive Scroll for smooth scroll and GSAP for animations.
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        This experience had help me to learn more about creative animations and design.
                    </p>
                </>
            }
        />
    );
};

export default Brasov;