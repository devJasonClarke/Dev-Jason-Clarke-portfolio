import Image from "next/image";
import styles from "./Hero.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const Jarallax = dynamic(() => import('../Jarallax/Jarallax.jsx'), { ssr: false });

const Hero = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

  return (
    <header>
        <Jarallax className={styles.header} speed={0.2} videoSrc="https://youtu.be/S4L8T2kFFck">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <PrismicRichText field={theData?.data?.hero_heading} />
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
