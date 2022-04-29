import Link from "next/link";
import {
  FaFacebookF,
  FaPlaystation,
  FaSteamSquare,
  FaInstagram,
} from "react-icons/fa";

import useStore from "../../store/store";

const Component = ({ className }) => {
  const { globals } = useStore();
  const socials = globals?.socials;

  const psn = socials?.psn;
  const steam = socials?.steam;
  const facebook = socials?.facebook;
  const instagram = socials?.instagram;

  return (
    <ul className={className}>
      {psn && (
        <li>
          <Link href={psn}>
            <a>
              <FaPlaystation className="social psn" />
            </a>
          </Link>
        </li>
      )}
      {steam && (
        <li>
          <Link href={steam}>
            <a>
              <FaSteamSquare className="social steam" />
            </a>
          </Link>
        </li>
      )}
      {facebook && (
        <li>
          <Link href={facebook}>
            <a>
              <FaFacebookF className="social facebook" />
            </a>
          </Link>
        </li>
      )}
      {instagram && (
        <li>
          <Link href={instagram}>
            <a>
              <FaInstagram className="social instagram" />
            </a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Component;
