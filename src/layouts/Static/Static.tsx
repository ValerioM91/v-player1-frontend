import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import IntroAnimation from "../../components/IntroAnimation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Component = ({
  className,
  children,
  pageTitle,
}: {
  className?: string;
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head title={pageTitle} description="Login into your account" />
      <IntroAnimation />
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <main className={className}>{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Component;
