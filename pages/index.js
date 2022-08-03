import { createClient } from "../prismicio";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import SectionPadding from "../components/SectionPadding/SectionPadding";
import AboutSection from "../components/AboutSection/AboutSection";
import BlogSection from "../components/BlogSection/BlogSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";

import { useSelector, useDispatch } from "react-redux";
import { populateHomepage } from "redux/cms/cmsSlice";
import { useEffect } from "react";

export default function Home({ page, blogs }) {
  /*   console.log(page);
  console.log(blogs);
 */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateHomepage({ page }));
  }, [page, dispatch]);
  const routes = useSelector((state) => state.cms.cms.homepage.data?.counter);
  console.log(`routes: ${routes}`);
  return (
    <>
      <Hero data={page} />
      {/* <h1> {routes}</h1> */}
      <BlogSection data={blogs} />
      <PortfolioSection />
       <SectionPadding color={"black"} />
    </>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getByType("blog_post", {
    page: 1,
    pageSize: 4,
    orderings: {
      field: "my.blog_post.timestamp",
      direction: "desc",
    },
  });
  const page = await client.getByUID("homepage", "index");

  return {
    props: { page, blogs }, // Will be passed to the page component as props
  };
}
