import React from "react";
import Tab from "./Tab";
import { useState, useEffect } from "react";
import styles from "../styles/Tabsbar.module.css";

import { useRouter } from "next/router";

const dic = {
  1: {
    name: "home.jsx",
    icon: "/react_icon.svg",
    path: "/",
  },
  2: {
    name: "information.tsx",
    icon: "/react_icon.svg",
    path: "/information",
  },
  3: {
    name: "skills.js",
    icon: "/react_icon.svg",
    path: "/skills",
  },
  4: {
    name: "certificates.html",
    icon: "/react_icon.svg",
    path: "/certificates",
  },
  5: {
    name: "image.svg",
    icon: "/react_icon.svg",
    path: "image",
  },
  6: {
    name: "contact.css",
    icon: "/react_icon.svg",
    path: "/contact",
  },
};

const Tabsbar = ({
  showIntro,
  showSkills,
  showContact,
  showCerti,
  showProject,
  showExp,
}) => {
  const router = useRouter();
  const [cpath, setCpath] = useState(router.pathname);
  return (
    <>
      {/* <div className={styles.tabs}>
        {allTabs.map((data) => {
          return (
            <Tab
              icon="/react_icon.svg"
              filename="bruh.jsx"
              path="/"
              show={true}
            />
          );
        })}
        <Tab icon="/react_icon.svg" filename="home.jsx" path="/" show={false} />
      <Tab
        icon="/html_icon.svg"
        filename="about.html"
        path="/about"
        show={true}
      />
      <Tab
        icon="/css_icon.svg"
        filename="contact.css"
        path="/contact"
        show={true}
      />
      <Tab
        icon="/js_icon.svg"
        filename="projects.js"
        path="/projects"
        show={true}
      />
      <Tab
        icon="/json_icon.svg"
        filename="certificates.json"
        path="/certificate"
        show={true}
      />
      </div> */}

      <div className={styles.tabs}>
        {
          <Tab
            icon="/react_icon.svg"
            filename="home.jsx"
            path="/"
            show="bruh"
          />
        }
        {showIntro && (
          <Tab
            icon="/html_icon.svg"
            filename="introduction.html"
            path="/introloading"
            show="/introloading"
            newpath={cpath}
          />
        )}
        {showSkills && (
          <Tab
            icon="/type_script_icon.svg"
            filename="skills.tsx"
            path="/skillsloading"
            show="/skillsloading"
            newpath={cpath}
          />
        )}
        {showExp && (
          <Tab
            icon="/js_icon.svg"
            filename="experience.jsx"
            show="/experienceloading"
            path="/experienceloading"
            newpath={cpath}
          />
        )}

        {showCerti && (
          <Tab
            icon="/js_icon.svg"
            filename="certificates.js"
            path="/certificates"
            show="/certificates"
            newpath={cpath}
          />
        )}
        {showProject && (
          <Tab
            icon="/react_icon.svg"
            filename="projects.jsx"
            path="/projectsloading"
            show="/projectsloading"
            newpath={cpath}
          />
        )}
        {showContact && (
          <Tab
            icon="/css_icon.svg"
            filename="contact.css"
            path="/contact"
            show="/contact"
            newpath={cpath}
          />
        )}
      </div>
    </>
  );
};

export default Tabsbar;
