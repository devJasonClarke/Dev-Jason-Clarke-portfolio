import { useState } from "react";
import styles from "./MobileMenu.module.scss";

const MobileMenu = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <div className={styles["mobile-menu"]}>
      <button
        className={
          toggle
            ? `${styles.active} ${styles["hamburger"]} ${styles["hamburger--shelf"]}`
            : `${styles["hamburger"]} ${styles["hamburger--shelf"]}`
        }
        type="button"
        onClick={() => {
          SetToggle(!toggle);
          console.log(toggle);
        }}
      >
        {toggle}
        <div className={styles.inner}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </button>
    </div>
  );
};

export default MobileMenu;
