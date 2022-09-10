import SectionPadding from "../SectionPadding/SectionPadding";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import styles from "./BlogPostSection.module.scss";
import { motion } from "framer-motion";
import DateFormat from "composables/DateFormat";
import { useDispatch } from "react-redux";
import { setImg } from "redux/blogHeroImg/blogHeroImg";
import { useEffect } from "react";

const BlogPostSection = ({ data }) => {
  const dispatch = useDispatch();

  const img = data?.data.image[0].text;
  useEffect(() => {
    dispatch(setImg(img));
  }, [dispatch, img]);

  return (
    <SectionPadding color={"grey"}>
      <div className={styles.container}>
        <h1>
          <PrismicText field={data?.data.title} />
        </h1>
        <motion.img src={img} alt="img" className={styles.img} />
        <div className={styles.author_container}>
          <p>
            Author:{" "}
            {data.data.author_name[0]?.text ? (
              <PrismicText field={data?.data.author_name} />
            ) : (
              "Jason Clarke"
            )}
          </p>
          <p> | </p>
          <p>Published: {DateFormat(data?.data.timestamp)}</p>
        </div>
        <div className={styles.format}>
          <PrismicRichText field={data?.data.article} />
        </div>
      </div>
    </SectionPadding>
  );
};
export default BlogPostSection;
