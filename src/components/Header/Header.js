import Link from "next/link";
import Image from "next/image";

import useAssetsContext from "../../context/AssetsContext";
import Container from "../Container";

const Component = ({ className }) => {
  const { mainMenu, isLoadingMainMenu, errorMainMenu, globals } =
    useAssetsContext();

  const logo = globals?.logos?.logoBlue;

  if (isLoadingMainMenu) return null;
  if (errorMainMenu) return console.error("Error loading the menu");

  if (!logo && !mainMenu) return null;

  return (
    <header className={className}>
      <Container>
        <nav className="nav">
          <Link href="/">
            <a className="logo">
              {logo && (
                <Image
                  alt="V-Player1"
                  src={logo}
                  width={70}
                  height={40}
                  layout="fixed"
                />
              )}
            </a>
          </Link>
          <ul className="links">
            {mainMenu.map((link, index) => {
              const { label, path, cssClasses } = link;
              if (path === "/#contact") {
                return (
                  <li key={index} onClick={() => setContactActive(true)}>
                    <a
                      className={`link underline${
                        cssClasses && cssClasses.length ? ` ${cssClasses}` : ""
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              } else
                return (
                  <li key={index}>
                    <Link href={path}>
                      <a
                        className={`link underline${
                          cssClasses && cssClasses.length
                            ? ` ${cssClasses}`
                            : ""
                        }`}
                      >
                        {label}
                      </a>
                    </Link>
                  </li>
                );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Component;
