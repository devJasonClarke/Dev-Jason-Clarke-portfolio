import styles from "./BlogHero.module.scss";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Image from "next/image";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax.jsx"), {
  ssr: false
});

const BlogHero = () => {
  return (
    <header>
      <Jarallax
        speed={0.2}
        /*    videoSrc="https://youtu.be/S4L8T2kFFck" */
      >
        <Image
          className={`jarallax-img`}
          src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
