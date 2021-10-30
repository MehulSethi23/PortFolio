import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Tab.module.css";
import { Button } from "@mui/material";
import link from "next/link";
import { useState } from "react";

const Tab = ({ icon, filename, path, show }) => {
  const router = useRouter();
  const [newpath, setnewPath] = useState(router.pathname);

  return (
    <>
      <Link href={path}>
        <div
          className={`${styles.tab} ${
            router.pathname === path && styles.active
          }`}
        >
          <Image src={icon} alt={filename} height={18} width={18} />
          <p>{filename}</p>
        </div>
      </Link>
    </>
  );
};

export default Tab;
