import { motion } from "framer-motion";
import styles from "./BlogCard.module.scss";
import { PrismicText } from "@prismicio/react";
import DateFormat from "composables/DateFormat";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`blog/${blog.uid}`}>
      <a>
        {" "}
        <div className={styles.card}>
          <div className={styles["img-container"]}>
            <motion.img
              src={blog.data.image[0]?.text}
              alt="img"
              className={styles.img}
            />
          </div>

          <div className={styles["text-container"]}>
            <p className={styles.date}> {DateFormat(blog.data.timestamp)}</p>
            <p className={styles.title}>
              <PrismicText className={styles.title} field={blog.data.title} />
            </p>
            <p className={styles.desc}>
              <PrismicText
                className={styles.title}
                field={blog.data.introduction}
              />
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
