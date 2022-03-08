import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Explorer.module.css";
import Tab from "./Tab";

const Explorer = ({}) => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);

  return (
    <>
      <div className={styles.explorer}>
        <p className={styles.title}>Explorer</p>
        <div>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="portfolio-checkbox"
            checked={portfolioOpen}
            onChange={() => {
              setPortfolioOpen(!portfolioOpen);
            }}
          />
          <label htmlFor="portfolio-checkbox" className={styles.heading}>
            <ChevronRight
              className={styles.chevron}
              style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
            />
            Portfolio
          </label>
          <div
            className={styles.files}
            style={portfolioOpen ? { display: "block" } : { display: "none" }}
          >
            <Link href="/">
              <div className={styles.file}>
                <Image
                  src="/react_icon.svg"
                  alt="React Icon"
                  height={18}
                  width={18}
                />{" "}
                <p>home.jsx</p>
              </div>
            </Link>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="about-checkbox"
              checked={aboutOpen}
              onChange={() => setAboutOpen(!aboutOpen)}
            />
            <label htmlFor="about-checkbox" className={styles.headingIn}>
              <ChevronRight
                className={styles.chevron}
                style={aboutOpen ? { transform: "rotate(90deg)" } : {}}
              />
              About
            </label>
            <div
              className={styles.files}
              style={aboutOpen ? { display: "block" } : { display: "none" }}
            >
              <Link href="introloading">
                <div className={styles.fileIn}>
                  <Image
                    src="/html_icon.svg"
                    alt="HTML Icon"
                    height={18}
                    width={18}
                  />
                  <p>intro.html</p>
                </div>
              </Link>
              <Link href="skillsloading">
                <div className={styles.fileIn}>
                  <Image
                    src="/type_script_icon.svg"
                    alt="TypeScript Icon"
                    height={18}
                    width={18}
                  />
                  <p>skills.tsx</p>
                </div>
              </Link>
              <Link href="experienceloading">
                <div className={styles.fileIn}>
                  <Image
                    src="/js_icon.svg"
                    alt="JS Icon"
                    height={18}
                    width={18}
                  />{" "}
                  <p>experience.js</p>
                </div>
              </Link>
              {/* <Link href="certificates">
                <div className={styles.fileIn}>
                  <Image
                    src="/js_icon.svg"
                    alt="JS Icon"
                    height={18}
                    width={18}
                  />{" "}
                  <p>certificates.js</p>
                </div>
              </Link> */}
              <Link href="projectsloading">
                <div className={styles.fileIn}>
                  <Image
                    src="/react_icon.svg"
                    alt="JSX Icon"
                    height={18}
                    width={18}
                  />{" "}
                  <p>projects.jsx</p>
                </div>
              </Link>

              {/* <Link href="image">
                <div className={styles.fileIn}>
                  <Image
                    src="/image_icon.svg"
                    alt="Image Icon"
                    height={18}
                    width={18}
                  />{" "}
                  <p>image.svg</p>
                </div>
              </Link> */}
            </div>

            <Link href="contactloading">
              <div className={styles.file}>
                <Image
                  src="/css_icon.svg"
                  alt="CSS Icon"
                  height={18}
                  width={18}
                />{" "}
                <p>contact.css</p>
              </div>
            </Link>
            {/* <Link href="/projects">
            <div className={styles.file}>
              <Image
                src="/js_icon.svg"
                alt="JavaScript Icon"
                height={18}
                width={18}
              />{" "}
              <p>projects.js</p>
            </div>
          </Link>
          <Link href="/certificates">
            <div className={styles.file}>
              <Image
                src="/json_icon.svg"
                alt="JSON Icon"
                height={18}
                width={18}
              />{" "}
              <p>certificates.json</p>
            </div>
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorer;
