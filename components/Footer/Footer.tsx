import styles from "./Footer.module.scss";

const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p>© {date.getFullYear()} Developed by Jason Clarke.</p>
    </footer>
  );
};
export default Footer;
