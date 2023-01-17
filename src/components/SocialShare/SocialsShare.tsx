import { FaFacebook, FaWhatsapp, FaTelegram, FaTwitter, FaReddit } from "react-icons/fa";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export type Props = {
  url: string;
  className?: string;
};

const Component = ({ className, url }) => {
  return (
    <div className={className}>
      <p>Share on:</p>
      <ul>
        <FacebookShareButton url={url}>
          <FaFacebook className="social-icon facebook" />
        </FacebookShareButton>
        <RedditShareButton url={url}>
          <FaReddit className="social-icon reddit" />
        </RedditShareButton>
        {/* <TelegramShareButton url={url}>
          <FaTelegram className="social-icon telegram" />
        </TelegramShareButton>
        <WhatsappShareButton url={url}>
          <FaWhatsapp className="social-icon whatsapp" />
        </WhatsappShareButton> */}
        <TwitterShareButton url={url}>
          <FaTwitter className="social-icon twitter" />
        </TwitterShareButton>
      </ul>
    </div>
  );
};

export default Component;
