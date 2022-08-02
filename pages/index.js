import { createClient } from "../prismicio";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import SectionPadding from "../components/SectionPadding/SectionPadding";
import AboutSection from "../components/AboutSection/AboutSection";
import BlogSection from "../components/BlogSection/BlogSection";
export default function Home({ page, blogs }) {
  console.log(page);
  console.log(blogs);
  return (
    <>
      <Hero data={page} />
      <SectionPadding/>
      <SectionPadding/>
      <SectionPadding/>
      <SectionPadding/>
      <SectionPadding/>
      <SectionPadding/>
      <SectionPadding/>
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
