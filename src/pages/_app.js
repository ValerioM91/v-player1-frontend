import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../utils/global.css";
import { motion } from "framer-motion";
import useStore from "../store/store";

export default function App({ Component, pageProps, router }) {
  const [loaded, setLoaded] = useState(false);
  const { darkTheme, setDarkTheme } = useStore();

  useEffect(() => {
    setLoaded(true);
    const darkInitialTheme = window.localStorage.getItem("darkTheme");
    setDarkTheme(darkInitialTheme === "true");
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "#393939";
      localStorage.setItem("darkTheme", true);
    } else {
      document.body.style.backgroundColor = "#fff";
      localStorage.setItem("darkTheme", false);
    }
  }, [darkTheme]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div
          className="starter"
          style={loaded ? { display: "none" } : {}}
        ></div>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.2, ease: "easeIn" },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </ApolloProvider>
  );
}
