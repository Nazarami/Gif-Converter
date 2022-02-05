import Menu from "./Menu";
import SocialMedia from "./SocialMedia/Main";
import styles from "styles/navbar/main.module.scss";
import { MountainLogo } from "public/navbar/icons";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <MountainLogo height="50px" width="50px" />
      <Menu />
      <SocialMedia />
    </div>
  );
}

export default Navbar;
