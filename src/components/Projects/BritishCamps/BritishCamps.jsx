import React, { useRef } from "react";
import styles from "./BritishCamps.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import british from "../british.jpg";
import sport1 from "../Sport/sport1.png";
const BritishCamps = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="british camps"
            imgSrc={british}
            img1={sport1}
            text={
                <>
                    <p>
                        British Camps Romania is a company that provides camp services to students.
                    </p>
                    <p>
                        I've worked on a newsletter for a couple of months. I've created the design and the functionality of the newsletter, and mentained it (including the domain and delivering emails).
                    </p>
                    <p>
                        The newsletter was built with Brevo and respected client's needs and requirements.
                    </p>
                </>
            }
        />
    );
};

export default BritishCamps;