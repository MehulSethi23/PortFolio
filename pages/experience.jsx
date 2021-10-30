import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
import { ExperienceCard, Page, Main, Right } from "../styles/Styles";
import { HiOutlineExternalLink } from "react-icons/hi";
import Fade from "react-reveal/Fade";
import { getAllRoles } from "../lib/experience";

const ExperiencePage = (props) => {
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
  }
  return (
    <Page>
      <Right>
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            setVisible((visible) => {
              return { ...visible, experience: isVisible };
            });
          }}
          offset={{
            top: windowHeight / 3,
            bottom: windowHeight / 3,
          }}
        >
          <section>
            {props.roles.map((role) => (
              <Fade bottom fraction={0.4} key={role.name}>
                <ExperienceCard style={{ marginBottom: "20px" }}>
                  <header>{role.type}</header>
                  <div style={{ color: "#00ff00" }}>
                    <img src={`/experience/${role.image}`} />
                    <h2 style={{ paddingLeft: "20px" }}> {role.name}</h2>
                  </div>
                  <header className="date">{role.duration}</header>
                  <ul>
                    {role.description.map((sentence) => (
                      <li key={sentence}>{sentence}</li>
                    ))}
                  </ul>
                  <a href={role.link} target="_blank">
                    <HiOutlineExternalLink color="white" size={18} />
                  </a>
                </ExperienceCard>
              </Fade>
            ))}
          </section>
        </VisibilitySensor>
      </Right>
    </Page>
  );
};

export async function getStaticProps() {
  const experience = getAllRoles();
  return {
    props: { title: "Experience", roles: [...experience.roles] },
  };
}

export default ExperiencePage;
