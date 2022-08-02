import NavLinks from "../NavLinks/NavLinks";
import Image from "next/image";
import styles from "./Nav.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a
         initial={{  opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
          className={styles.logo}>
          <span>Dev</span>
          <span>Jason</span>
        </a>
      </Link>
      <div className={styles["nav-links-container"]}>
        <NavLinks delay={0.05} />
      </div>
      <MobileMenu />
    </nav>
  );
};
export default Nav;
