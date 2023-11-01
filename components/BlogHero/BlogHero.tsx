import styles from "./BlogHero.module.scss";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Image from "next/image";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), {
  ssr: false
});

const BlogHero = () => {
  const img = useSelector((state) => state.blogHeroImg.img);
  return (
    <header>
      <Jarallax
        speed={0.2}
        /*    videoSrc="https://youtu.be/S4L8T2kFFck" */
      >
        <Image
          className={`jarallax-img`}
          src={
            img
              ? img
              : "https://images.unsplash.com/photo-1698803999577-e6917a1c1f16?auto=format&fit=crop&q=80&w=2515&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="img"
          layout="fill"
        />
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>Blog</h1>
        </motion.div>
      </Jarallax>
    </header>
  );
};
export default BlogHero;
