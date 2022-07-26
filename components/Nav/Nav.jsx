import Image from "next/image";
import styles from "./Nav.module.scss";
import Link from "next/link";

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
        <li>
          <Link href="#">Home </Link>
        </li>
        <li>
          <Link href="#">About </Link>
        </li>
        <li>
          <Link href="#">Blog </Link>
        </li>
        <li>
          <Link href="#">Portfolio </Link>
        </li>
        <li>
          <Link href="#">Contact </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
