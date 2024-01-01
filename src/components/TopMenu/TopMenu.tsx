import Link from "next/link"
import useStore from "@/store"
import ThemeToggler from "@/components/ThemeToggler"
import LogoSVG from "@/components/Logo"

type Props = {
  className?: string
}

const Component = ({ className }: Props) => {
  const { mainMenu } = useStore()

  if (!mainMenu) {
    return null
  }

  return (
    <div className={className}>
      <nav className="nav-center container heading-font">
        <Link href="/" scroll={false} className="logo" aria-label="home">
          <LogoSVG variant="white" width={100} height={50} style={{ objectFit: "contain" }} />
        </Link>
        <ul className="links">
          {mainMenu.map((link, index) => {
            const { label, path, cssClasses } = link
            return (
              <li key={index}>
                <Link
                  href={path}
                  scroll={false}
                  className={`link underline${cssClasses && cssClasses.length ? ` ${cssClasses}` : ""}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <ThemeToggler className="toggler" />
    </div>
  )
}

export default Component
