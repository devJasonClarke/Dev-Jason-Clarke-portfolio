import styles from "./SectionPaddingAlt.module.scss";
import { motion } from "framer-motion";

const SectionPaddingAlt = ({ children, color }) => {
  return (
    <section className={`${styles.section}`}>
      <motion.div
        className={`${styles.bg} ${styles[color]}`}
        whileInView={{ width: "100%" }}
        initial={{ width: "0.5%" }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        {" "}
      </motion.div>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
export default SectionPaddingAlt;
