import { createClient } from "../prismicio";
import { PrismicText } from "@prismicio/react";

export default function Home({ page }) {
  console.log(page);
  return (
    <div>
      <PrismicText field={page.data.title} />

      {/* <ul>
        {page.map((document) => (
          <div key={document.id}>
            <li>{document.data.title[0].text}</li>
            <PrismicText field={document.data.title} />
          </div>
        ))}
      </ul> */}
    </div>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("blog_post", "test");
/*   const page = await client.getAllByType("blog_post", "test"); */

  return {
    props: { page }, // Will be passed to the page component as props
  };
}
