import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ExperienceCard1 } from "../styles/Styles";
import { useEffect } from "react";

function Left({ children }) {
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
        visible: { x: 0 },
        hidden: { x: -200 },
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
      transition={{ duration: 0.65, ease: "easeInOut", delay: 3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
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
      transition={{ duration: 0.65, ease: "easeInOut", delay: 3.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <Left>
              <h1 className={styles.name}>Mehul Sethi</h1>
            </Left>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <div className={styles.name}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 3, ease: "easeInOut", duration: 2 },
                }}
                whileTap={{ transition: { opacity: 0, delay: 1 } }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  ease: "easeInOut",
                }}
              >
                <Link href="/projects">
                  <button className={styles.button}>View Work</button>
                </Link>

                <Link href="/contact">
                  <button className={styles.outlined}>Contact Me</button>
                </Link>
              </motion.div>
            </div>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
