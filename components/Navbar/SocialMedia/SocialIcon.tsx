function SocialIcon({ Icon, link }) {
  return (
    <div>
      <a target="_blank" href={link}>
        <Icon />
      </a>
    </div>
  );
}

export default SocialIcon;
