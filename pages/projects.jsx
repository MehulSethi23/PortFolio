import Card from "../components/ProjectCard";
import { ExperienceCard2, ExperienceCard } from "../styles/StylesProject";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../styles/IntroductionPage.module.css";
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import GithubIcon from "../public/experience/GithubIcon";
import { Router } from "next/router";

const line1 = "My Projects";
const line2 = "follow me on ";

function FadeLeft({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.65, ease: "easeInOut", delay: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ProjectsPage = () => {
  const ref = useRef();
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const [show1, setshow1] = useState(true);
  return (
    <AnimatePresence>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <a
          href="https://github.com/MehulSethi23"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon style={{ color: "white" }}></GithubIcon>
        </a>
      </div>
      {/* <div style={{ display: "flex" }}>
        <motion.h3
          className={styles.className}
          style={{ marginBottom: "20px", marginLeft: "20px", color: "#00ff00" }}
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h3>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ExperienceCard2>
            <a
              href="https://github.com/MehulSethi23/NetflixCloneApp"
              target="_blank"
              rel="noopener"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.8, ease: "easeInOut", duration: 1 },
                }}
                whileTap={{ transition: { opacity: 0, delay: 1 } }}
                whileHover={{
                  scale: 1.07,

                  boxShadow: "0px 0px 10px rgb(204, 0, 0)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  ease: "easeInOut",
                }}
                src={`/experience/netflixlogonew.jpeg`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "ease-in-out",
                }}
              />
            </a>
          </ExperienceCard2>
        </motion.div>

        <motion.div
          style={{
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ExperienceCard2>
            <a
              href="https://github.com/MehulSethi23/TeslaClone"
              target="_blank"
              rel="noopener"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.1, ease: "easeInOut", duration: 1 },
                }}
                whileTap={{ transition: { opacity: 0, delay: 1 } }}
                whileHover={{
                  scale: 1.07,

                  boxShadow: "0px 0px 10px rgb(255,255,0)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  ease: "easeInOut",
                }}
                src={`/experience/teslafinal.png`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "ease-in-out",
                }}
              />
            </a>
          </ExperienceCard2>
        </motion.div>
        <motion.div
          style={{
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ExperienceCard2>
            <a
              href="https://github.com/MehulSethi23/ChatApp-MERN"
              target="_blank"
              rel="noopener"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.1, ease: "easeInOut", duration: 1 },
                }}
                whileTap={{ transition: { opacity: 0, delay: 1 } }}
                whileHover={{
                  scale: 1.07,

                  boxShadow: "0px 0px 10px rgb(0, 255, 127)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  ease: "easeInOut",
                }}
                src={`/experience/WhatsApp-Logonew.png`}
                style={{
                  width: "100%",
                  height: "100%",

                  cursor: "pointer",
                  transition: "ease-in-out",
                }}
              />
            </a>
          </ExperienceCard2>
        </motion.div>
        <motion.div
          style={{
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ExperienceCard2>
            <a
              href="https://github.com/MehulSethi23/ChatApp-MERN"
              target="_blank"
              rel="noopener"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.1, ease: "easeInOut", duration: 1 },
                }}
                whileTap={{ transition: { opacity: 0, delay: 1 } }}
                whileHover={{
                  scale: 1.07,

                  boxShadow: "0px 0px 10px rgb(255, 95, 21)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  ease: "easeInOut",
                }}
                src={`/experience/snapfinal.png`}
                style={{
                  width: "100%",
                  height: "100%",

                  cursor: "pointer",
                  transition: "ease-in-out",
                }}
              />
            </a>
          </ExperienceCard2>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

//resize images to height 809 width 1711

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;

{
  /* <ExperienceCard2>
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={ref} // to use toggle method like ref.curret.toggle()
            >
              <FrontSide
                ref={ref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.8, ease: "easeInOut", duration: 1 },
                  }}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 0px 10px rgb(204, 0, 0)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    ease: "easeInOut",
                  }}
                  src={`/experience/netflix.jpg`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "ease-in-out",
                  }}
                />
              </FrontSide>
              <BackSide style={{ boxShadow: "0px 0px 10px rgb(204, 0, 0)" }}>
                <button className={styles.outlined1}>Source Code</button>
              </BackSide>
            </Flippy>
          </ExperienceCard2> */
}
