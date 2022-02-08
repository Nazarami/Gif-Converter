import { ContactInfo } from "types";
function SocialIcon({ Icon, link }: ContactInfo) {
  return (
    <div>
      <a target="_blank" href={link} rel="noreferrer">
        <Icon />
      </a>
    </div>
  );
}

export default SocialIcon;
