import { default as NextHead } from "next/head";

const Head = ({ title, description, image }) => {
  return (
    <>
      <NextHead>
        <title>{title || "V-Player 1"}</title>
        <meta
          name="description"
          content={description || "Reviews about Video-Games"}
        />
        {image && <meta property="og:image" content={image} />}
      </NextHead>
    </>
  );
};

export default Head;
