import { createClient } from "../../prismicio";
import MetaTags from "@/components/@/MetaTags/MetaTags";
import BlogPageSection from "@/components/@/BlogPageSection/BlogPageSection";
import BlogHero from "@/components/@/BlogHero/BlogHero";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogPage, setArr } from "../../redux/blogPage/blogPage";

const Blog = ({ blogs }) => {
  console.log(blogs);

  const page = useSelector((state) => state.blogPage.page);
  const arr = useSelector((state) => state.blogPage.arrLength);

  const dispatch = useDispatch();

  console.log(page);

  useEffect(() => {
    const paginatedArr = [];

    const chunkArray = (arr, size) =>
      arr.length > size
        ? (paginatedArr = [
            arr.slice(0, size),
            ...chunkArray(arr.slice(size), size),
          ])
        : (paginatedArr = [arr]);

    chunkArray(blogs, 1);

    dispatch(setArr(paginatedArr));
  }, [blogs, dispatch]);
  console.log(arr?.[0]?.[0]);

  const nextPage = () => {
    if (page < arr?.length - 1) {
      dispatch(setBlogPage());

      console.log("load more");
    } else if (page) {
    }
  };

  return (
    <div>
      <MetaTags
        title="Blog"
        description="Blog articles I've published"
        image={0}
      />
      <BlogHero />

      <BlogPageSection data={arr?.[page]} pages={arr?.length}>
        <button onClick={nextPage}>asdfa</button>
      </BlogPageSection>
    </div>
  );
};

export default Blog;

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getAllByType("blog_post", {
    orderings: {
      field: "my.blog_post.timestamp",
      direction: "desc",
    },
  });

  return {
    props: { blogs }, // Will be passed to the page component as props
  };
}
