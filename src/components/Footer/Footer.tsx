import React from "react"
import Image from "next/image"
import Link from "next/link"
import Container from "../Container"
import Socials from "../Socials"

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
              <Image
                src="/images/logo-white.svg"
                alt={"V-Player1"}
                width={70}
                height={50}
                layout="fixed"
                objectFit="contain"
                placeholder="empty"
              />
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
