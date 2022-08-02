import NavLinks from "../NavLinks/NavLinks";
import Image from "next/image";
import styles from "./Nav.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image
        src="https://devjasonclarke.com/img/icons/React.svg"
        alt="logo"
        width="40"
        height={40}
      />
      <NavLinks />
      <MobileMenu/>
    </nav>
  );
};
export default Nav;
