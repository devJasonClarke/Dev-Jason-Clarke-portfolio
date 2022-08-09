import styles from "./Hero.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax.jsx"), {
  ssr: false
});

const Hero = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

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
          className={
            theData?.data?.hero_heading
              ? styles.container
              : `${styles.container} ${styles.alt}`
          }
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <PrismicRichText
            field={
              theData?.data?.hero_heading
                ? theData?.data?.hero_heading
                : theData?.data?.title
            }
          />
        </motion.div>
      </Jarallax>
    </header>
    /*  <header className={styles.header}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <PrismicRichText field={theData?.data?.hero_heading} />
      </motion.div>
    </header> */
  );
};
export default Hero;
