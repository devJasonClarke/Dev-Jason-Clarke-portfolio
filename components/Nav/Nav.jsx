import NavLinks from "../NavLinks/NavLinks";
import Image from "next/image";
import styles from "./Nav.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>
          <span>Dev</span>
          <span>Jason</span>
        </a>
      </Link>
      <NavLinks />
      <MobileMenu />
    </nav>
  );
};
export default Nav;
