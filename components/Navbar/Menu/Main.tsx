import styles from "styles/navbar/menu.module.scss";
import MenuItem from "./MenuItem";
function Menu() {
  const urls = ["about", "contact"];
  return (
    <div className={styles.menu}>
      {urls.map((url) => (
        <MenuItem url={url} key={url} />
      ))}
    </div>
  );
}

export default Menu;
