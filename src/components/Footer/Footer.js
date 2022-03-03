import React from "react";
import Image from "next/image";
import Link from "next/link";

import useAssetsContext from "../../context/AssetsContext";
import Container from "../Container";
import Socials from "../Socials";

const Component = ({ className }) => {
  const { globals } = useAssetsContext();

  const logo = globals?.logos?.logo;

  return (
    <footer className={className}>
      <Container className="heading-font">
        <div className="wrapper">
          {logo && (
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt={"V-Player1"}
                  width={70}
                  height={50}
                  layout="fixed"
                  objectFit="contain"
                  placeholder="empty"
                />
              </a>
            </Link>
          )}
          <p className="copy">
            {new Date().getFullYear()} &copy; Valerio Mattera
          </p>
          <Socials className="socials" />
        </div>
      </Container>
    </footer>
  );
};

export default Component;
