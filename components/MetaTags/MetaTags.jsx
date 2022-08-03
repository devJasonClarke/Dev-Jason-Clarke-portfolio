import Head from "next/head";
const MetaTags = ({ title, description, image }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{`${title} | Dev Jason`}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={`${title} | Dev Jason`} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content={image ? image : "https://devjasonclarke.com/img/og.jpg"}
      />
      <meta property="og:url" content="https://devjasonclarke.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Dev Jason`} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image ? image : "https://devjasonclarke.com/img/og.jpg"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Dev Jason`} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image ? image : "https://devjasonclarke.com/img/og.jpg"}
      />
    </Head>
  );
};

export default MetaTags;
