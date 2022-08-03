import styles from "./PortfolioSection.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SectionPadding from "../SectionPadding/SectionPadding";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const PortfolioSection = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

  return (
    <SectionPadding color="grey">
      <div className={styles.container}>
        <h1>Work</h1>
        <p>A few of the projects i&apos;ve woked on</p>
        <p>AKA didn&apos;t sign an NDA</p>

        <div className={styles["work-container"]}>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </SectionPadding>
  );
};
export default PortfolioSection;