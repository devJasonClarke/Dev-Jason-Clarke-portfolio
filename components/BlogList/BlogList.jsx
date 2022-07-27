import Link from "next/link";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import styles from "./BlogList.module.scss";
import Image from "next/image";
const BlogList = ({ document }) => {
  return (
    <Link href={`blog/${document.uid}`}>
      <div className={`${styles.card} ${styles.pointer}`}>
        <div className={styles.text}>
          <PrismicText field={document.data.title} />
          <PrismicRichText field={document.data.introduction} />
        </div>
        <Image
          src={document.data.image[0]?.text}
          alt="logo"
          width={700}
          height={400}
          objectFit="fill"
        />
      </div>
    </Link>
  );
};
export default BlogList;
