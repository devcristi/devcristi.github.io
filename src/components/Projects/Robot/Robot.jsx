import React, { useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
import robot from "./img1.jpg";
import sport1 from "./img2.jpg";
import sport2 from "./img3.jpg";
import sport3 from "./img4.jpg";
const Robot = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="3d printed tank"
            imgSrc={robot}
            img1={sport1}
            img2={sport2}
            img3={sport3}
            githubLink={"https://github.com/devcristi/robot"}
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
                        I've built a 3d printed tank robot based on ESP32 Arduino microcontroller. It simulates a WW2 Maus tank that can shoot paper bullets.
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        Thank's to the distance sensor, the robot can detect obstacles and avoid them automatically. The robot does also have PID control to mentain a fixed distance from a moving obstacle.
                        All 3D-printed parts were designed by me in Fusion 360.
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        The robot can be controlled via a simple web interface from any device connected to the same network.
                    </p>
                </>
            }
        />
    );
};

export default Robot;