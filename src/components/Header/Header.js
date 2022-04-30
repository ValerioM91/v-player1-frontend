import Link from "next/link";
import useStore from "../../store";
import Container from "../Container";
import ThemeToggler from "../ThemeToggler";

const Component = ({ className }) => {
  const { mainMenu, globals } = useStore();

  const logo = globals?.logos?.logoBlue;

  if (!logo && !mainMenu) return null;

  return (
    <header className={className}>
      <Container>
        <nav className="nav">
          <Link href="/">
            <a className="logo">
              {logo && (
                <img
                  alt="V-Player1"
                  src={logo}
                  layout="fixed"
                  className="logo-image"
                />
              )}
            </a>
          </Link>
          <ThemeToggler className="toggler" />
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
