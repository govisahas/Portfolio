import React from "react";
import Profile from "../assets/avatar.png";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";
import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaFigma, } from "react-icons/fa6";
import { SiMongodb, SiPostgresql, SiTypescript, SiCanva, SiTailwindcss, SiNextdotjs, SiGodotengine, SiUipath, SiUnity, SiCypress, SiPostman } from "react-icons/si";
import "./Home.css";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants, imgVariants, shapeVariants } from "./Animations";


const Home = () => {

    return (
        <section className="home" id="home">

            <div className="home__wrapper container">

                <motion.div
                    className="home__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={fadeUpVariants} className="home__subtitle text-cs">
                        Hello, <span>My Name Is</span>
                    </motion.p>

                    <motion.h1 variants={fadeUpVariants} className="home__title text-cs">
                        <span>Sahasrika</span> Kulasekara
                    </motion.h1>

                    <motion.p variants={fadeUpVariants} className="home__description">
                        I graduated with a BSc (Hons) in Software Engineering, First Class, from the University of Colombo School of Computing.
                       I have experience in Quality Assurance Engineering,
                        I create user-friendly, engaging digital experiences and enjoy exploring the intersection of design, code, and interaction to craft thoughtful digital solutions.
                    </motion.p>

                    <motion.div variants={fadeUpVariants} className="home__socials">
                        <a href="https://www.linkedin.com/in/govindani-sahasrika" className="home__social-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/govisahas" className="home__social-link" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>

                    </motion.div>

                    <motion.div variants={fadeUpVariants} className="home__buttons">
                        <a href="" className="btn text-cs">Download CV</a>
                        <a href="" className="text-cs hero__link">My Skills</a>
                    </motion.div>
                </motion.div>

                <div className="home__img-wrapper">
                    <motion.div
                        className="home__banner"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.img
                            src={Profile}
                            alt="Sahasrika Profile"
                            className="home__profile"
                            variants={imgVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    </motion.div>


                    <div className="home__tech-icons">
                        <motion.div
                            className="home__tech-icon react"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaReact />
                        </motion.div>

                        <motion.div
                            className="home__tech-icon node"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <FaNodeJs />
                        </motion.div>

                        <motion.div
                            className="home__tech-icon ts"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <SiTypescript />
                        </motion.div>

                        <motion.div
                            className="home__tech-icon figma"
                            animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <FaFigma />
                        </motion.div>
                        <motion.div
                            className="home__tech-icon godot"
                            animate={{ x: [0, 20, 0], y: [0, -40, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <SiGodotengine />
                        </motion.div>

                        <motion.div
                            className="home__tech-icon unity"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        >
                            <SiUnity />
                        </motion.div>

                        <motion.div
                            className="home__tech-icon uipath"
                            animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                        >
                            <SiUipath />
                        </motion.div>

                    </div>

                </div>

            </div>

            {/* Background Shapes */}
            <div className="shapes">
                <motion.img
                    src={shapeOne}
                    alt=""
                    className="shape shape__1"
                    variants={shapeVariants}
                    animate="animate"
                />
                <motion.img
                    src={shapeTwo}
                    alt=""
                    className="shape shape__2"
                    variants={shapeVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                />
                <motion.img
                    src={shapeTwo}
                    alt=""
                    className="shape shape__3"
                    variants={shapeVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                />
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Web Developer</span>
            </div>

            <a href="#services" className="scroll__down">
                <span className="scroll__name text-cs">Scroll Down</span>
                <span className="scroll__icon"></span>
            </a>
        </section >
    );
};

export default Home;