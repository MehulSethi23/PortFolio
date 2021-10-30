import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";
import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const [showHome, setShowHome] = useState(true);
  const [showCerti, setShowCerti] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProject, setshowProject] = useState(false);
  const [showExp, setshowExp] = useState(false);
  const [url, currURL] = useState("");

  const router = useRouter();
  useEffect(() => {
    currURL(router.pathname);
    if (url == "/introduction") {
      setShowIntro(true);
    } else if (url == "/skills") {
      setShowSkills(true);
    } else if (url == "/contact") {
      setShowContact(true);
    } else if (url == "/certificates") {
      setShowCerti(true);
    } else if (url == "/projects") {
      setshowProject(true);
    } else if (url == "/experience") {
      setshowExp(true);
    }
  });
  console.log(url);

  return (
    <>
      <AnimatePresence>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <Explorer />
          <div style={{ width: "100%" }}>
            <Tabsbar
              showIntro={showIntro}
              showSkills={showSkills}
              showContact={showContact}
              showCerti={showCerti}
              showProject={showProject}
              showExp={showExp}
            />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
        <Bottombar />
      </AnimatePresence>
    </>
  );
};

export default Layout;
