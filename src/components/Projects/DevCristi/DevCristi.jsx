import React, { useRef } from "react";
import styles from "./DevCristi.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import dev from "../dev.jpg";
import sport1 from "../Sport/sport1.png";
import sport2 from "../Sport/sport2.png";
import sport3 from "../Sport/sport3.png";
const DevCristi = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="devcristi v1"
            imgSrc={dev}
            img1={sport1}
            img2={sport2}
            img3={sport3}
            text={
                <>
                    <p>
                        This is the first version of my personal portfolio. I've build it with HTML, CSS and JavaScript.
                    </p>
                    <p>
                        The purpose of this project was an practical exam when I was in high school.
                        The exam was about creating a project of any kind and then presenting it to the examiners.
                    </p>
                    <p>
                        I was very happy with the result. It's fully responsive and works on all devices.
                        The examiners were impressed by the design and the functionality of the website.
                    </p>
                </>
            }

            textp1={
                <>
                    <p>
                        This is the first version of my personal portfolio. I've build it with HTML, CSS and JavaScript.
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        The purpose of this project was an practical exam when I was in high school.
                        The exam was about creating a project of any kind and then presenting it to the examiners.
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        I was very happy with the result. It's fully responsive and works on all devices.
                        The examiners were impressed by the design and the functionality of the website.
                    </p>
                </>
            }
        />
    );
};

export default DevCristi;