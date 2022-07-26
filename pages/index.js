import { createClient } from "../prismicio";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export default function Home({ page }) {
  console.log(page);
  return (
    <div>
      {/*  <PrismicText field={page.data.title} />
       */}
      <ul>
        {page.results.map((document, index) => (
          <div key={document.id}>
            <Link href={`blog/${document.uid}`}>
              <div>
                <PrismicText field={document.data.title} />
                <PrismicRichText field={document.data.introduction} />
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  /*   const page = await client.getByUID("blog_post", "test"); */
  const page = await client.getByType("blog_post");

  return {
    props: { page }, // Will be passed to the page component as props
  };
}
