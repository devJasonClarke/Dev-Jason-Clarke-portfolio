import { createClient } from "../../prismicio";
import MetaTags from "@/components/@/MetaTags/MetaTags";
import BlogHero from "@/components/@/BlogHero/BlogHero";
import BlogPostSection from "@/components/@/BlogPostSection/BlogPostSection";

const BlogPost = ({ document }) => {
  return (
    <>
      <MetaTags
        title={document.data.title[0].text}
        description={document.data.introduction[0].text}
        image={document.data.image[0].text}
      />
      <article>
        <BlogHero />
        <BlogPostSection data={document} />
      </article>
    </>
  );
};

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });

  /*   const page = await client.getByUID("blog_post", "test"); */
  const document = await client.getByUID("blog_post", params.blog);

  return {
    props: { document } // Will be passed to the page component as props
  };
}

export default BlogPost;
