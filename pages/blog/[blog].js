import { createClient } from "../../prismicio";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import Hero from "@/components/@/Hero/Hero";
import MetaTags from "@/components/@/MetaTags/MetaTags";

const BlogPost = ({ document }) => {
  return (
    <div>
      <MetaTags
        title={document.data.title[0].text}
        description={document.data.introduction[0].text}
        image={document.data.image[0].text}
      />
      <Hero />
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

export default BlogPost;
