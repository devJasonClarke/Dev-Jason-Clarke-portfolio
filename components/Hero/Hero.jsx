import Image from "next/image";
import  styles  from "./Hero.module.scss";

const Hero = () => {
  return (
    <header className={styles.header}>
      <h1>Hi <span className={styles.run}>👋</span>, My Name Is <br /> Jason Clarke</h1>
    </header>
  );
};
export default Hero;
