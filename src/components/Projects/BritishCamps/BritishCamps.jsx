import React, { useRef } from "react";
import styles from "./BritishCamps.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import british from "../british.jpg";
import sport1 from "../BritishCamps/castelul-bran-1-1.webp";
import sport2 from "../BritishCamps/img1.png";
import sport3 from "../BritishCamps/img3.png";
const BritishCamps = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="british camps"
            imgSrc={british}
            img1={sport1}
            img2={sport2}
            img3={sport3}

            textp1={
                <>
                    <p>
                        British Camps Romania is a company that provides camp services to students.
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        I've worked on a newsletter for a couple of months. I've created the design and the functionality of the newsletter, and mentained it (including the domain and delivering emails).
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        The newsletter was built with Brevo and respected client's needs and requirements.
                    </p>
                </>
            }
        />
    );
};

export default BritishCamps;