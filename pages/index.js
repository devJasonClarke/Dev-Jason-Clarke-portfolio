import { createClient } from "../prismicio";

export default function Home({ page }) {
  console.log(page);
  return (
    <div>
      <ul>
        {page.map((document) => (
          <li key={document.id}>{document.data.title[0].text}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getAllByType("blog_post");

  return {
    props: { page }, // Will be passed to the page component as props
  };
}
