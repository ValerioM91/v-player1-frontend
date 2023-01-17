import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../utils/global.css";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "../store";

export default function App({ Component, pageProps, router }) {
  const [loaded, setLoaded] = useState(false);
  const { darkTheme, setDarkTheme, isLoggedIn, setIsLoggedIn } = useStore();

  useEffect(() => {
    setLoaded(true);

    const darkInitialTheme = window.localStorage.getItem("darkTheme");
    setDarkTheme(darkInitialTheme === "true");

    const storedLogin = window.localStorage.getItem("loggedIn");
    setIsLoggedIn(storedLogin === "true");
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "#393939";
      document.body.classList.add("dark-theme");
      localStorage.setItem("darkTheme", "true");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.classList.remove("dark-theme");
      localStorage.setItem("darkTheme", "false");
    }
  }, [darkTheme]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("loggedIn", "true");
    } else {
      localStorage.setItem("loggedIn", "false");
    }
  }, [isLoggedIn]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="starter" style={loaded ? { display: "none" } : {}}></div>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </ApolloProvider>
  );
}
