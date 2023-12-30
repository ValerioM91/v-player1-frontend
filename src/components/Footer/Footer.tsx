import React from "react"
import Link from "next/link"
import Container from "../Container"
import Socials from "../Socials"
import LogoSVG from "../Logo"

type Props = {
  className?: string
}

const Component = ({ className }: Props) => {
  return (
    <footer className={className}>
      <Container className="heading-font">
        <div className="wrapper">
          <Link href="/" scroll={false}>
            <a>
              <LogoSVG variant="white" width={70} height={50} style={{ objectFit: "contain" }} />
            </a>
          </Link>
          <p className="copy">{new Date().getFullYear()} &copy; Valerio Mattera</p>
          <Socials className="socials" />
        </div>
      </Container>
    </footer>
  )
}

export default Component
