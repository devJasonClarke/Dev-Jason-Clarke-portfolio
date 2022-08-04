import styles from "./BlogSection.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SectionPadding from "../SectionPadding/SectionPadding";
import BlogCard from "../BlogCard/BlogCard";

const BlogSection = ({ data }) => {
  const [theData, setTheData] = useState();
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setTheData(data), [data]);

  return (
    <SectionPadding color="black">
      <div className={styles.container}>
        <h1>Latest Posts</h1>

        <div className={styles["work-container"]}>
          {theData?.results.map((document, index) => (
            <div key={document.id}>
              <BlogCard blog={document} />
            </div>
          ))}
        </div>
      </div>
    </SectionPadding>
  );
};
export default BlogSection;
