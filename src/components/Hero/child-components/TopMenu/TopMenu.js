import Link from "next/link";
import Image from "next/image";

import useAssetsContext from "../../../../context/AssetsContext";

const Component = ({ className }) => {
  const { mainMenu, isLoadingMainMenu, errorMainMenu, globals } =
    useAssetsContext();

  const logo = globals?.logos?.logo;

  if (isLoadingMainMenu) return null;

  if (errorMainMenu) {
    console.log("Error loading the menu");
    return null;
  }

  if (!logo && !mainMenu) {
    return null;
  }

  return (
    <div className={className}>
      <nav className="nav-center container heading-font">
        <Link href="/">
          <a className="logo">
            {logo && (
              <Image
                src={logo}
                alt="V-Player1"
                width={100}
                height={50}
                layout="fixed"
                objectFit="contain"
                placeholder="empty"
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
                        cssClasses && cssClasses.length ? ` ${cssClasses}` : ""
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
    </div>
  );
};

export default Component;
