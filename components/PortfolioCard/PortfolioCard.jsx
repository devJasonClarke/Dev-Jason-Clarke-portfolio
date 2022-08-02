import { motion } from "framer-motion";
import styles from "./PortfolioCard.module.scss";

const PortfolioCard = () => {
  return (
    <div>
      <div className={styles["img-container"]}>
        <motion.div
          className={`${styles.bg}`}
          whileInView={{ height: "0" }}
          initial={{ height: "100%" }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img"
          className={styles.img}
        />
      </div>

      <div>
        <p>asdfasf</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
