import SectionPaddingAlt from "../SectionPaddingAlt/SectionPaddingAlt";
import Image from "next/image";
import styles from "./BlogSection.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogList from "../BlogList/BlogList";
const BlogSection = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);
  return (
    <SectionPaddingAlt color="grey">
      <h1>Articles</h1>
      <div className={styles.container}>
        {data.results.map((document, index) => (
          <div key={document.id}>
            <BlogList document={document} />
          </div>
        ))}
      </div>
    </SectionPaddingAlt>
  );
};
export default BlogSection;
