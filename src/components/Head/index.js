import { default as NextHead } from "next/head";

const Head = ({ title, description }) => {
  return (
    <>
      <NextHead>
        <title>{title || "V-Player 1"}</title>
        <meta
          name="description"
          content={description || "Reviews about Video-Games"}
        />
      </NextHead>
    </>
  );
};

export default Head;
