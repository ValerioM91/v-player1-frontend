import { useState, useEffect } from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "../lib/apolloClient"
import { ThemeProvider } from "styled-components"
import theme from "../utils/theme"
import "../utils/global.css"
import { motion, AnimatePresence } from "framer-motion"
import useStore from "../store"
import { Roboto_Slab, Electrolize } from "next/font/google"

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["300", "400", "700"], display: "swap" })

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--electrolize",
})

export default function App({ Component, pageProps, router }) {
  const [loaded, setLoaded] = useState(false)
  const { darkTheme, setDarkTheme } = useStore()

  useEffect(() => {
    setLoaded(true)
    if (typeof window === "undefined") return
    const darkInitialTheme = window.localStorage.getItem("darkTheme") === "true"
    setDarkTheme(darkInitialTheme)
  }, [setDarkTheme])

  useEffect(() => {
    if (typeof window === "undefined" || !loaded) return

    if (darkTheme) {
      document.body.style.backgroundColor = "#393939"
      localStorage.setItem("darkTheme", "true")
    } else {
      document.body.style.backgroundColor = "#fff"
      localStorage.setItem("darkTheme", "false")
    }
  }, [darkTheme, loaded])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="starter" style={loaded ? { display: "none" } : {}}></div>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <motion.div
            className={`${roboto.className} ${electrolize.variable}`}
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
  )
}
