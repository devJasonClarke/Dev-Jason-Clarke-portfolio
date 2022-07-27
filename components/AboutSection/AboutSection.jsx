import Image from "next/image";
import styles from "./AboutSection.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionPaddingAlt from "../SectionPaddingAlt/SectionPaddingAlt";

const AboutSection = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

  return (
    <SectionPaddingAlt color="grey">
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>
          I am a software engineer with a history of working with modern
          technologies to solve complex issues. You usually find me coding the
          front end or chilling with the UX/UI designers.
        </p>
        <p>
          These days I use in HMTL, CSS, Javascript, React.Js, Vue.Js, Nuxt.Js,
          Next.Js and REST APIs to build amazing software and implement
          successful features.
        </p>
      </div>
    </SectionPaddingAlt>
  );
};
export default AboutSection;
