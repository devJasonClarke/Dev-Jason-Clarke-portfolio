import { createClient } from "../../prismicio";
import Hero from "@/components/@/Hero/Hero";
import MetaTags from "@/components/@/MetaTags/MetaTags";

const Blog = () => {
  return (
    <div>
      <MetaTags
        title="Blog"
        description="Blog articles I've published"
        image={0}
      />

      <Hero />
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
