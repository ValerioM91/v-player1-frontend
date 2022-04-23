import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../utils/global.css";
import { ReviewsProvider } from "../context/ReviewsContext";
import { AssetsProvider } from "../context/AssetsContext";
import { IntroAnimationProvider } from "../context/LoadingContext";

export default function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AssetsProvider>
          <ReviewsProvider>
            <IntroAnimationProvider>
              <div
                className="starter"
                style={{ visibility: `${loaded ? "hidden" : ""}` }}
              ></div>
              <Component {...pageProps} />
            </IntroAnimationProvider>
          </ReviewsProvider>
        </AssetsProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
