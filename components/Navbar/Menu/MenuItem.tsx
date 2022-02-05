import Link from "next/link";
import styles from "styles/navbar/menu.module.scss";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function MenuItem({ url }: { url: string }) {
  return (
    <Link href={`${url}`} key={url}>
      <h2 className={styles.item}>{capitalizeFirstLetter(url)}</h2>
    </Link>
  );
}

export default MenuItem;
