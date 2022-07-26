import { createClient } from "../prismicio";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import SectionPadding from "../components/SectionPadding/SectionPadding";

export default function Home({ page }) {
  console.log(page);
  return (
    <div>
      <Nav />
      <Hero data={page} />
      <SectionPadding color="grey">
        <h1 data-aos="fade-up">awfdas</h1>
      </SectionPadding>
    </div>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  /*   const page = await client.getByUID("blog_post", "test"); */
  const page = await client.getByUID("homepage", "index");

  return {
    props: { page }, // Will be passed to the page component as props
  };
}
