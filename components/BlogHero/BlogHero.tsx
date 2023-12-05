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
              : "https://images.pexels.com/photos/14553706/pexels-photo-14553706.jpeg?auto=compress&cs=tinysrgb&w=2060&h=1750&dpr=1"
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
