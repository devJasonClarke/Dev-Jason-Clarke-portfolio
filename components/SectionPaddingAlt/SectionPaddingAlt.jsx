import styles from "./SectionPadding.module.scss";
const SectionPadding = ({ children, color }) => {
  return (
    <section className={`${styles.section} ${styles[color]}`}>
      {children}
    </section>
  );
};
export default SectionPadding;
