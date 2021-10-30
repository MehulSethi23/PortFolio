import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Router } from "next/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <AnimatePresence>
      <Layout>
        <Head title={`Mehul Sethi | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
