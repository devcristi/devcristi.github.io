import React, { useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import absoluto from "../Absoluto/images-removebg-preview.png";
import sport1 from "./img1.png";
import sport2 from "./img2.png";
import sport3 from "./img3.png";
const Absoluto = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="Absoluto BJJ"
            imgSrc={absoluto}
            img1={sport1}
            img2={sport2}
            img3={sport3}
            githubLink={"https://github.com/devcristi/intranetFE"}
            future_things={
                <>
                <h2>Coming Soon</h2>
                    <p>
                        Live preview, updated UX and more features.
                    </p>
                </>
            }

            textp1={
                <>
                    <p>
                        Absoluto BJJ is a Brazilian Jiu-Jitsu and martial arts school. The project theme was to create a fast and secure platform for the school.
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        The technologies used were React, Java Spring Boot, Material UI and MySQL.
                        The users can register, login, view the schedule, book classes and view their profile.
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        All the data is secured via JWT tokens and hashed passwords with Spring Security.
                    </p>
                </>
            }
        />
    );
};

export default Absoluto;