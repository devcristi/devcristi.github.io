import React, { useRef } from "react";
import styles from "./SelfDrivingCar.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import car from "../selfdrivingcar.png";
import car1 from "../SelfDrivingCar/car1.png"
import car2 from "../SelfDrivingCar/car2.png";
import car3 from "../SelfDrivingCar/selfdrivingcar.png";

const SelfDrivingCar = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="Selfdriving car"
            imgSrc={car}
            img1={car1}
            img3={car1}
            img2={car1}
            textp1={
                <>
                    <p>
                       This project simulates a selfdriving car that will have a lot of functionalities like road detection, traffic lights and more.
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        It's built with only vanilla JavaScript and some HTML & CSS.
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        This is the first version. The project is still in development and the full version will be available soon.
                    </p>
                </>
            }
        />
    );
};

export default SelfDrivingCar;