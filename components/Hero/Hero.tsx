import styles from "./Hero.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider
} from "react-scroll-parallax";
const Hero = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

  return (
    <header>
      <ParallaxProvider>
        <ParallaxBanner>
          <ParallaxBannerLayer
            image="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            speed={-20}
            className={styles.background}
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
        </ParallaxBanner>
      </ParallaxProvider>
    </header>
  );
};
export default Hero;
