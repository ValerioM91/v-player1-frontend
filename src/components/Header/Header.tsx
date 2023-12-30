import Link from "next/link"
import useStore from "@/store"
import Container from "../Container"
import ThemeToggler from "../ThemeToggler"
import LogoSVG from "../Logo"

export type Props = {
  className?: string
}

const Component = ({ className }: Props) => {
  const { mainMenu } = useStore()

  if (!mainMenu) return null

  return (
    <header className={className}>
      <Container className="container">
        <nav className="nav">
          <Link href="/" scroll={false} aria-label="home">
            <a className="logo" aria-label="home">
              <LogoSVG className="logo" />
            </a>
          </Link>
          <ThemeToggler className="toggler" />
          <ul className="links">
            {mainMenu.map((link, index) => {
              const { label, path, cssClasses } = link
              return (
                <li key={index}>
                  <Link href={path} scroll={false}>
                    <a className={`link underline${cssClasses && cssClasses.length ? ` ${cssClasses}` : ""}`}>
                      {label}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Component
