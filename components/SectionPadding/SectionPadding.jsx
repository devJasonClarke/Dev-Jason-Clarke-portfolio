import styles from "./SectionPadding.module.scss";
const SectionPadding = ({ children, color }) => {
  return (
    <section className={styles[color]}>
      <div className={styles.section}>{children}</div>
    </section>
  );
};
export default SectionPadding;