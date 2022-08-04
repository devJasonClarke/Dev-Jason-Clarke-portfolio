import styles from "./PortfolioSection.module.scss";
import { PrismicText } from "@prismicio/react";
import { useEffect, useState } from "react";
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
        <h1><PrismicText field={theData?.data.title} /></h1>
        <p>A few projects that I&apos;ve worked on</p>
        <div className={styles["work-container"]}>
          {data?.data.projects.map((document) => (
            <div key={document.title[0].text}>
              <PortfolioCard document={document} />
            </div>
          ))}
        </div>
      </div>
    </SectionPadding>
  );
};
export default PortfolioSection;
