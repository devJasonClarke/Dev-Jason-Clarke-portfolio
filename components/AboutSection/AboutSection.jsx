import Image from "next/image";
import styles from "./AboutSection.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionPadding from "../SectionPadding/SectionPadding";

const AboutSection = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

  return (
   
   <SectionPadding color='grey'>
    <h1>
        About Me
    </h1>
   </SectionPadding>
  );
};
export default AboutSection;
