import styles from "./BlogPaginationBtns.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { nextBlogPage, prevBlogPage } from "../../redux/blogPage/blogPage";
import Link from "next/link";

const BlogPaginationBtns = () => {
  const page = useSelector((state) => state.blogPage.page);
  const arr = useSelector((state) => state.blogPage.arr);
  const arrLength = useSelector((state) => state.blogPage.arrLength);
  const dispatch = useDispatch();
  
  const nextPage = () => {
    if (page < arr?.length - 1) {
      dispatch(nextBlogPage());
    }
  };
  const previousPage = () => {
    if (page > 0) {
      dispatch(prevBlogPage());
    }
  };

  return (
    <div className={styles.container}>
      <Link href={page > 0 ? "#blog" : "#"}>
        <a
          className={
            page > 0 ? styles.button : `${styles.button} ${styles.disable}`
          }
          onClick={previousPage}
        >
          Previous Page
        </a>
      </Link>
      <Link href={"#blog"}>
        <a
          className={
            page <= arrLength - 2
              ? styles.button
              : `${styles.button} ${styles.disable}`
          }
          onClick={nextPage}
        >
          Next Page
        </a>
      </Link>
      {/*      <Link href="#blog"> <a className={styles.button} onClick={previousPage}>Previous Page</a></Link>
     <Link href="#blog"> <a className={styles.button} onClick={nextPage}>Next Page</a> </Link> */}
    </div>
  );
};

export default BlogPaginationBtns;
