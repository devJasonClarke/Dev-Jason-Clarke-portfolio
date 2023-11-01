import styles from "./Hero.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), {
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
          src="https://images.unsplash.com/photo-1698803999577-e6917a1c1f16?auto=format&fit=crop&q=80&w=2515&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
