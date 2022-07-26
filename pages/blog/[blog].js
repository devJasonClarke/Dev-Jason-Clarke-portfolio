import { createClient } from "../../prismicio";
import { PrismicText, PrismicRichText } from "@prismicio/react";

const Blog = ({ document }) => {
  return (
    <div>
      <PrismicText field={document.data.title} />
      <PrismicRichText field={document.data.article} />
    </div>
  );
};

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });

  /*   const page = await client.getByUID("blog_post", "test"); */
  const document = await client.getByUID("blog_post", params.blog);

  return {
    props: { document }, // Will be passed to the page component as props
  };
}

export default Blog;
