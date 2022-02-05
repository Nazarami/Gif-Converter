import { ContactInfo } from "types";
function SocialIcon({ Icon, link }: ContactInfo) {
  return (
    <div>
      <a target="_blank" href={link}>
        <Icon />
      </a>
    </div>
  );
}

export default SocialIcon;
