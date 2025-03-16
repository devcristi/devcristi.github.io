import React, { useRef } from "react";
import styles from "./Prostate.module.css";
import Navbar from "../../Navbar/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectTemplate from "../ProjectTemplate/ProjectTemplate";
// import prostata from "./prostata.png";
// import prostata from "./pi-cai_logo_social_RTPzVdl.x20.jpeg";
import prostata from "./10015_1000015_t2w_slice_4-removebg-preview.png";
import img1 from "../Prostate/pi-cai_logo-_opon1op-x20.jpeg";
import img2 from "../Prostate/attention_unet.png";
import img3 from "../Prostate/prostata.png";

const Prostate = () => {
    return (
        <ProjectTemplate
            title="Brasov"
            subheading="TumorXplorer"
            imgSrc={prostata}
            imgClassName={styles.prostataImg}
            img1={img1}
            img2={img2}
            img3={img3}
            githubLink={"https://github.com/devcristi/Multitask-Prostate-Segmentation-and-Cancer-Classification-Model-Using-Deep-Learning"}
            future_things={
                <>
                <h2>Coming Soon</h2>
                    <p>
                        Improving the model's performance by fine-tuning the hyperparameters, using a more complex architecture and deploying the model on a web application.
                    </p>
                </>
            }


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
                        The Dataset contained 1500 images of anonymized prostate cancer patients. After data preprocessing, we have 673 pacients. 321 without cancer and 352 with cancer.

                    </p>
                </>
            }
            textp3={
                <>
                    <p>
                        At this time, the model reached a maximum AUROC score of 83.5%, 85.1% segmentation accuracy and 77.4% classification accuracy.
                    </p>
                </>
            }
        />
    );
};

export default Prostate;