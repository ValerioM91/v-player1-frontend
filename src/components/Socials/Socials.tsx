import Link from "next/link"
import { FaFacebookF, FaPlaystation, FaSteamSquare, FaInstagram } from "react-icons/fa"

import useStore from "@/store"

export type Props = {
  className?: string
}

const Component = ({ className }) => {
  const { globals } = useStore()
  const socials = globals?.socials

  const psn = socials?.psn
  const steam = socials?.steam
  const facebook = socials?.facebook
  const instagram = socials?.instagram

  return (
    <ul className={className}>
      {psn && (
        <li>
          <Link href={psn} aria-label="psn">
            <FaPlaystation className="social psn" />
          </Link>
        </li>
      )}
      {steam && (
        <li>
          <Link href={steam} aria-label="steam">
            <FaSteamSquare className="social steam" />
          </Link>
        </li>
      )}
      {facebook && (
        <li>
          <Link href={facebook} aria-label="facebook">
            <FaFacebookF className="social facebook" />
          </Link>
        </li>
      )}
      {instagram && (
        <li>
          <Link href={instagram} aria-label="instagram">
            <FaInstagram className="social instagram" />
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Component
