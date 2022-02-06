import styles from "styles/body/afterUpload/BottomBar.module.scss";
function SelectQuality() {
  return (
    <div className={styles.optionsWrapper}>
      <div className={styles.optionItems}>
        <p>Small</p>
      </div>
      <div className={styles.optionItems}>
        <p>Medium</p>
      </div>
      <div className={styles.optionItems}>
        <p>Large</p>
      </div>
    </div>
  );
}

export default SelectQuality;
