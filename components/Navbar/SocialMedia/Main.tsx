import styles from "styles/navbar/social.module.scss";
import SocialItem from "./SocialIcon";
import contactInfo from "./ContactInfo";
import { ContactInfo } from "types";
function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      {contactInfo.map((socialMedia: ContactInfo) => (
        <SocialItem
          key={socialMedia.link}
          link={socialMedia.link}
          Icon={socialMedia.Icon}
        />
      ))}
    </div>
  );
}

export default SocialMedia;
