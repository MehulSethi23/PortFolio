import styles from "../styles/IntroductionPage.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ExperienceCard1 } from "../styles/Styles";
import { useEffect } from "react";

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
function FadeInWhenVisibleRight({ children }) {
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 0, x: 150 },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeInWhenVisibleLeft({ children }) {
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 0, x: -150 },
      }}
    >
      {children}
    </motion.div>
  );
}

const openVariants = {
  hidden: { x: 500 },
  visible: { x: 0 },
  trasition: { delay: 1.5, duration: 1.5, ease: "easeInOut" },
};

const openDivVariants = {
  hidden1: { x: -150 },
  visible1: { x: 0 },
  trasition1: { delay: 2.5, duration: 1.5, ease: "easeInOut" },
};

const IntroductionPage = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div className={styles.code} exit={{ x: "-250vw" }}>
          <FadeInWhenVisible>
            <motion.div className={styles.info}>
              <motion.p
                className={styles.line}
                className={styles.className}
                variants={openVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span>&#60;</motion.span>
                <span className={styles.className}> about </span>
                <span className={styles.className}>&#62;</span>
              </motion.p>

              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  variants={openDivVariants}
                  initial="hidden"
                  animate="visible"
                >
                  I’m a MERN Developer located in India. I have a serious
                  passion for Competitve Coding, animations and creating
                  intuitive, dynamic user experiences.
                </motion.div>
              </p>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  variants={openDivVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Well-organised person, problem solver, quick learner with high
                  attention to detail. Fan of Anime, outdoor activities, TV
                  series and English literature.
                </motion.div>
              </p>
              <p className={styles.line}>
                <motion.div
                  className={styles.para}
                  variants={openDivVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Interested in the entire web dev spectrum and working on
                  ambitious projects with positive people.
                </motion.div>
              </p>
              <motion.p
                className={styles.line}
                variants={openVariants}
                initial="hidden"
                animate="visible"
              >
                <span className={styles.className}>&#60;</span>
                <span className={styles.className}> &#47;</span>
                <span className={styles.className}>about </span>
                <span className={styles.className}>&#62;</span>
              </motion.p>
            </motion.div>
          </FadeInWhenVisible>
          <div>
            <FadeInWhenVisibleLeft>
              <motion.p
                className={styles.line}
                variants={openDivVariants}
                initial="hidden"
                animate="visible"
              >
                <span className={styles.className}>&#60;</span>
                <span className={styles.className}> profile </span>
                <span className={styles.className}>&#62;</span>
              </motion.p>
            </FadeInWhenVisibleLeft>

            <div className={styles.code}>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.line}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>
                    &nbsp;&nbsp;&nbsp;FullName : Mehul Sethi
                  </p>
                </motion.p>
              </FadeInWhenVisibleRight>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.line}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>&nbsp;&nbsp;&nbsp;Age : 21</p>
                </motion.p>
              </FadeInWhenVisibleRight>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.para}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>&nbsp;&nbsp;&nbsp;Job : Student</p>
                </motion.p>
              </FadeInWhenVisibleRight>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.line}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>
                    &nbsp;&nbsp;&nbsp;School : Delhi Public School Mathura Road
                    New Delhi, India (2003-2019).
                  </p>
                </motion.p>
              </FadeInWhenVisibleRight>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.line}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>
                    &nbsp;&nbsp;&nbsp;Degree : B.Tech.
                  </p>
                </motion.p>
              </FadeInWhenVisibleRight>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.para}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>
                    &nbsp;&nbsp;&nbsp;College : SRM IST- KTR, Chennai, Tamil
                    Nadu, India (2019-Present).
                  </p>
                </motion.p>
              </FadeInWhenVisibleRight>
              <FadeInWhenVisibleRight>
                <motion.p
                  className={styles.para}
                  variants={openDivVariants}
                  initial="hidden1"
                  animate="visible1"
                >
                  <p className={styles.para}>
                    &nbsp;&nbsp;&nbsp;Address : K-9/28, DLF Phase-2, Gurugram,
                    Harayana -122001, India.
                  </p>
                </motion.p>
              </FadeInWhenVisibleRight>
            </div>
            <FadeInWhenVisibleLeft>
              <motion.p
                className={styles.line}
                variants={openDivVariants}
                initial="hidden11"
                animate="visible11"
              >
                <span className={styles.className}>&#60;</span>
                <span className={styles.className}> &#47;</span>
                <span className={styles.className}>profile </span>
                <span className={styles.className}>&#62;</span>
              </motion.p>
            </FadeInWhenVisibleLeft>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Introduction" },
  };
}

export default IntroductionPage;

{
  /* <p className={styles.line}>
            <span className={styles.className}>
              Profile : &#123; info : string &#125; &#91; &#93; ={" "}
            </span>
          </p>
          <br />
          &nbsp;
          <span className={styles.className}> &#91;</span>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            FullName <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span> Mehul Sethi
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            Age <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span> 21
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            Job <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span> Student
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            School <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span> Delhi Public School
            Mathura Road
            <br /> <p>(2003-2019), New Delhi, India</p>
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            Degree <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span> B.Tech
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            College <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span> SRM IST- KTR,
            Chennai, Tamil Nadu, India (2019-Present)
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          <p className={styles.text}>
            &nbsp;&nbsp;&nbsp;<span className={styles.className}> &#123;</span>{" "}
            <span className={styles.classNameSm}>" </span>
            Address <span className={styles.classNameSm}>"</span> :
            <span className={styles.classNameSm}> "</span>K-9/28, DLF Phase-2,
            Gurugram, Harayana -122001, India
            <span className={styles.classNameSm}> "</span>
            <span className={styles.className}> &#125;</span> ,
          </p>
          <br />
          <br />
          &nbsp;
          <span className={styles.className}> &#93;</span>
          <span className={styles.className}> ;</span>
        */
}
