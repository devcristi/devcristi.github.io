import React, { useRef } from "react";
import styles from "./Prostate.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
// import prostata from "./prostata.png";
// import prostata from "./pi-cai_logo_social_RTPzVdl.x20.jpeg";
import prostata from "./10015_1000015_t2w_slice_4-removebg-preview.png";

const Prostate = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="TumorXplorer"
            imgSrc={prostata}
            imgClassName={styles.prostataImg}
            // img1={sport1}
            // img2={img2}
            // img3={img3}
            // img4={sport1}


            textp1={
                <>
                    <p>
                        PyTorch, PI-CAI Dataset, Attention UNet
                    </p>
                </>
            }
            textp2={
                <>
                    <p>
                        Worked in a team to develop a deep learning model for prostate cancer detection. The model was trained on the PI-CAI dataset and we used an Attention UNet architecture.
                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        The Dataset contained 1500 images of anonymized prostate cancer patients. After data preprocessing, we have 673 pacients. 321 without cancer and 352 with cancer.
                    </p>
                </>
            }
            textp4={
                <>
                    <p>
                        Worked in a team to develop a deep learning model for prostate cancer detection. The model was trained on the PI-CAI dataset and we used an Attention UNet architecture.
                    </p>
                </>
            }
        />
    );
};

export default Prostate;