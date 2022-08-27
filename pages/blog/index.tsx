import { createClient } from "../../prismicio";
import MetaTags from "@/components/@/MetaTags/MetaTags";
import BlogPageSection from "@/components/@/BlogPageSection/BlogPageSection";
import BlogHero from "@/components/@/BlogHero/BlogHero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArr, setArrLenght } from "../../redux/blogPage/blogPage";
import BlogPaginationBtns from "@/components/@/BlogPaginationBtns/BlogPaginationBtns";

const Blog = ({ blogs }) => {
  const page = useSelector((state) => state.blogPage.page);
  const arr = useSelector((state) => state.blogPage.arr);
  const pageSize = 6;

  const dispatch = useDispatch();

  useEffect(() => {
    let paginatedArr = [];

    const chunkArray = (arr, size) =>
      arr.length > size
        ? (paginatedArr = [
            arr.slice(0, size),
            ...chunkArray(arr.slice(size), size)
          ])
        : (paginatedArr = [arr]);

    chunkArray(blogs, pageSize);

    dispatch(setArr(paginatedArr));
    dispatch(setArrLenght(paginatedArr.length));
  }, [blogs, dispatch]);

  return (
    <div>
      <MetaTags
        title="Blog"
        description="Blog articles I've published"
        image={0}
      />
      <BlogHero />

      <BlogPageSection data={arr?.[page]} pages={arr?.length}>
        <BlogPaginationBtns />
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
      direction: "desc"
    }
  });

  return {
    props: { blogs } // Will be passed to the page component as props
  };
}
