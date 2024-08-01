import React, { useRef } from "react";
import styles from "./SelfDrivingCar.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import car from "../selfdrivingcar.png";
import sport1 from "../Sport/sport1.png";
const SelfDrivingCar = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="Selfdriving car"
            imgSrc={car}
            img1={sport1}
            text={
                <>
                    <p>
                       This project simulates a selfdriving car that has a lot of functionalities like road detection, traffic lights and more.
                    </p>
                        It's built with only vanilla JavaScript and some HTML & CSS.
                    <p>

                    </p>
                    <p>
                        The project is still in development and the full version will be available soon.
                    </p>
                </>
            }
        />
    );
};

export default SelfDrivingCar;