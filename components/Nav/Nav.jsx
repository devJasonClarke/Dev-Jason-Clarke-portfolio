import Image from "next/image";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image
        src="https://devjasonclarke.com/img/icons/React.svg"
        alt="logo"
        width="40"
        height={40}
      />
      <ul className={styles["nav-links"]}>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Nav;
