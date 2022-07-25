import { createClient } from "../prismicio";
import { PrismicText } from "@prismicio/react";

export default function Home({ page }) {
  console.log(page);
  return (
    <div>
      <ul>
        {page.map((document) => (
          <div key={document.id}>
            <li>{document.data.title[0].text}</li>
            <PrismicText field={document.data.title} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getAllByType("blog_post");

  return {
    props: { page }, // Will be passed to the page component as props
  };
}
