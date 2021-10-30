import React from "react";
import { useState } from "react";
import Explorer from "./Explorer";
import Tabsbar from "./Tabsbar";

const Container = () => {
  const [allTabs, setTabs] = useState([]);
  const [allT, setT] = useState("hello");
  console.log(allT);
  console.log("hello");
  console.log(allTabs);

  useEffect(() => {
    setTabs([...allTabs, "1"]);
  }, []);
  function onDelete(chipToDelete) {
    setTabs((allTabs) => allTabs.filter((chip) => chip !== chipToDelete));
  }
  function onTabClick(idx) {
    setTabs([...allTabs, idx]);
  }
  return (
    <>
      <Tabsbar allTabs={allTabs}></Tabsbar>
      <Explorer onTabClick={onTabClick}></Explorer>
    </>
  );
};

export default Container;
