import { createClient } from "../prismicio";
import Hero from "../components/Hero/Hero";
import SectionPadding from "../components/SectionPadding/SectionPadding";
import BlogSection from "../components/BlogSection/BlogSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import MetaTags from "../components/MetaTags/MetaTags";

export default function Home({ page, blogs, work }) {
  return (
    <>
      <MetaTags
        title="Home"
        description="Hello, my name is Jason. Welcome to my website"
        image={0}
      />
      <Hero data={page} />
      <BlogSection data={blogs} />
      <PortfolioSection data={work}/>
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
  const work = await client.getByUID("portfolio", "portfolio");

  return {
    props: { page, blogs, work }, // Will be passed to the page component as props
  };
}
