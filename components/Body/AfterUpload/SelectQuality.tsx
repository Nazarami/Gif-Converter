import styles from "styles/body/afterUpload/BottomBar.module.scss";
import { Dispatch, SetStateAction } from "react";
interface QualityProps {
  quality: number;
  setQuality: Dispatch<SetStateAction<number>>;
}
function SelectQuality({ quality, setQuality }: QualityProps) {
  return (
    <div className={styles.optionsWrapper}>
      <div
        onClick={() => setQuality(0)}
        className={`${styles.optionItems} ${
          !quality ? `${styles.selectedQuality}` : ""
        }`}
      >
        <p>Small</p>
      </div>
      <div
        onClick={() => setQuality(1)}
        className={`${styles.optionItems} ${
          quality === 1 ? `${styles.selectedQuality}` : ""
        }`}
      >
        <p>Medium</p>
      </div>
      <div
        onClick={() => setQuality(2)}
        className={`${styles.optionItems} ${
          quality === 2 ? `${styles.selectedQuality}` : ""
        }`}
      >
        <p>Large</p>
      </div>
    </div>
  );
}

export default SelectQuality;
