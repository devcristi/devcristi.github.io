import React, { useRef } from "react";
import styles from "./Sport.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import sport from "../sport.png";
import sport1 from "../Sport/sport1.png";
const Sport = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="prezente sport"
            imgSrc={sport}
            img1={sport1}
            text={
                <>
                    <p>
                        My latest project brings toghether some familiar
                        technologies used in another projects (React.js) and some new ones (SpringBoot, MySql).
                    </p>
                    <p>It is a web application that allows users, students at UNITBV , to manage thei attendence at sport classes.
                        The users can create an account, log in and see their attendence.
                    </p>
                    <p>
                        Teachers have the ability to see the attendence of their students and give them attendence marks from an admin panel.
                    </p>
                </>
            }
        />
    );
};

export default Sport;