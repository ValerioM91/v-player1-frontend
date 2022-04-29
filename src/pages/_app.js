import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../utils/global.css";
import { DarkThemeProvider } from "../context/DarkThemeContext";
import { motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <ApolloProvider client={client}>
      <DarkThemeProvider>
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
      </DarkThemeProvider>
    </ApolloProvider>
  );
}
