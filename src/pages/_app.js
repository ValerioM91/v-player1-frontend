import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../utils/global.css";
import { ReviewsProvider } from "../context/ReviewsContext";
import { AssetsProvider } from "../context/AssetsContext";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AssetsProvider>
          <ReviewsProvider>
            <Component {...pageProps} />
          </ReviewsProvider>
        </AssetsProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
