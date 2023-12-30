import Link from "next/link"
import Image from "next/image"
import useStore from "../../../../store"
import ThemeToggler from "../../../ThemeToggler"

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
        <Link href="/" scroll={false}>
          <a className="logo">
            <Image
              src="/images/logo-white.svg"
              alt="V-Player1"
              width={100}
              height={50}
              layout="fixed"
              objectFit="contain"
              placeholder="empty"
            />
          </a>
        </Link>
        <ul className="links">
          {mainMenu.map((link, index) => {
            const { label, path, cssClasses } = link
            return (
              <li key={index}>
                <Link href={path} scroll={false}>
                  <a className={`link underline${cssClasses && cssClasses.length ? ` ${cssClasses}` : ""}`}>{label}</a>
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
