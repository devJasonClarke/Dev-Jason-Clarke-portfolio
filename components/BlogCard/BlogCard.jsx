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
              src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
