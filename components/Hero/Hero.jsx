import Image from "next/image";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className={styles.header}>
      <h1>
        Hi{" "}
        <motion.div
          animate={{ rotate: [0, 40, 0, 30, 0]}}
          transition={{ ease: "easeOut", duration: 1 }}
          className={styles.run}
        >
          👋
        </motion.div>
        , My Name Is <br /> Jason Clarke
      </h1>
    </header>
  );
};
export default Hero;
