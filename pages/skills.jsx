import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
import { Skills, Page, Right, Main } from "../styles/Styles";
import { getAllSkills } from "../lib/skillset";
import styles from "../styles/IntroductionPage.module.css";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Router } from "next/router";

const line1 = "Skills & Achievements";
const intro1 =
  "Since beginning of my journey as a freelance developer nearly an year ago, I’ve done work for agencies  and collaborated with talented people to create web products for both business and consumer use.";
const intro2 =
  "I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.";
const intro3 =
  "I also have full-stack developer experience with MERN Stack.  My bread and butter for Front-End development is React.js, Next.js, TypeScript, HTML, CSS, JavaScript, Framer-Motion, Bootstrap, Material-UI, Ant-Design and for Back-End development I primarily use SQL, Node.js, Express, Mangoose, MongoDB and Firebase.";

const intro4 = "I am also well versed in Python, C and C++.";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start("visible");
  }, [controls, inView]);
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeLeft({ children }) {
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
function FadeRight({ children }) {
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
      transition={{ duration: 0.65, ease: "easeInOut", delay: 1 }}
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

const SkillsPage = (props) => {
  const [visible, setVisible] = useState({
    skills: false,
    experience: false,
    projects: false,
  });

  const [windowHeight, setWindowHeight] = useState(0);

  if (typeof window !== "undefined") {
    useEffect(() => {
      setWindowHeight(window.innerHeight);
    }, [window.innerHeight]);

    useEffect(() => {
      eval(
        `try {TagCanvas.Start('myCanvas', '', {textColour: '#ffff',outlineColour: '#0000', imageMode: "both", imagePosition:"top", initial: [0.3,-0.1], fadeIn: 3000, wheelZoom: false, pinchZoom: true, shuffleTags: true, frontSelect: true, textHeight: 18, reverse: true, depth: 0.8,maxSpeed: 0.04, minSpeed: 0.02});} catch(e) {document.getElementById('myCanvasContainer').style.display = 'none';}`
      );
    });
  }

  return (
    <>
      <Page>
        <Right>
          <motion.h3
            className={styles.className}
            style={{ marginBottom: "20px", marginLeft: "20px" }}
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
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              setVisible((visible) => {
                return { ...visible, skills: isVisible };
              });
            }}
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3,
            }}
          >
            <Skills>
              <canvas width="720" height="720" id="myCanvas">
                <ul>
                  {props.skills.map((skill) => (
                    <a
                      key={skill.name}
                      href="#"
                      id={skill.name}
                      onClick={(e) => {
                        e.preventDefault();
                        eval(
                          `TagCanvas.TagToFront("myCanvas", {id: "${skill.name}", active: 1});`
                        );
                      }}
                    >
                      <li>
                        <img
                          width="60"
                          height="60"
                          src={`/images/svg/${skill.image}${""}.svg`}
                        />
                        {skill.name}
                      </li>
                    </a>
                  ))}
                </ul>
              </canvas>
            </Skills>
          </VisibilitySensor>
          <FadeInWhenVisible>
            <motion.div className={styles.code} exit={{ x: "-250vw" }}>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  initial="hidden"
                  animate="visible"
                >
                  {intro1}
                </motion.div>
              </p>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  initial="hidden"
                  animate="visible"
                >
                  {intro2}
                </motion.div>
              </p>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  initial="hidden"
                  animate="visible"
                >
                  {intro3}
                </motion.div>
              </p>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  initial="hidden"
                  animate="visible"
                >
                  {intro4}
                </motion.div>
              </p>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  initial="hidden"
                  animate="visible"
                >
                  I am expert on &nbsp;
                  <a
                    href="https://codeforces.com/profile/swagsy"
                    target="_blank"
                  >
                    Codeforces
                  </a>
                  &nbsp; and 5🌟 on &nbsp;
                  <a
                    href="https://www.codechef.com/users/mehul_23"
                    target="_blank"
                  >
                    Codechef
                  </a>
                  .
                </motion.div>
              </p>
            </motion.div>
          </FadeInWhenVisible>

          <div
            style={{
              display: "flex",
            }}
          >
            <a
              href="https://www.linkedin.com/in/mehul-sethi-6a2a301a8/"
              target="_blank"
              rel="noopener"
            >
              <FadeLeft>
                <button className={styles.button}>LinkedIn</button>
              </FadeLeft>
            </a>

            <FadeRight>
              <Link href="/experienceloading">
                <button className={styles.outlined}>Experience</button>
              </Link>
            </FadeRight>
          </div>
        </Right>
      </Page>
    </>
  );
};

export async function getStaticProps() {
  const skills = getAllSkills();
  return {
    props: {
      title: "Skills",
      skills: [...skills.skills],
    },
  };
}

export default SkillsPage;
