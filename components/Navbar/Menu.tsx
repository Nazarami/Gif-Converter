import Link from "next/link";
import styles from "styles/navbar/menu.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <Link href="about">
        <h1>About</h1>
      </Link>
      <Link href="contact">
        <h1>Contact</h1>
      </Link>
    </div>
  );
}

export default Menu;
