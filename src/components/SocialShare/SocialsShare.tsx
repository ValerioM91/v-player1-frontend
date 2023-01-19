import { FaFacebook, FaWhatsapp, FaTelegram, FaTwitter, FaReddit } from "react-icons/fa";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { trackSocialShare } from "../../utils/MixPanel";

export type Props = {
  url: string;
  className?: string;
  title: string;
};

const Component = ({ className, url, title }) => {
  const trackShare = (platform: "Facebook" | "Twitter" | "Reddit") => {
    trackSocialShare(title, platform);
  };

  return (
    <div className={className}>
      <p>Share on:</p>
      <ul>
        <FacebookShareButton url={url} onClick={() => trackShare("Facebook")}>
          <FaFacebook className="social-icon facebook" />
        </FacebookShareButton>
        <RedditShareButton url={url} onClick={() => trackShare("Reddit")}>
          <FaReddit className="social-icon reddit" />
        </RedditShareButton>
        {/* <TelegramShareButton url={url}>
          <FaTelegram className="social-icon telegram" />
        </TelegramShareButton>
        <WhatsappShareButton url={url}>
          <FaWhatsapp className="social-icon whatsapp" />
        </WhatsappShareButton> */}
        <TwitterShareButton url={url} onClick={() => trackShare("Twitter")}>
          <FaTwitter className="social-icon twitter" />
        </TwitterShareButton>
      </ul>
    </div>
  );
};

export default Component;
