// Manages the url links to internal Prismic documents
// Expand this function as your website grows
const linkResolver = (doc) => {

    if (doc.type === "blog_post") {
      return `/blog/${doc.uid}`;
    }
  
  
    // using Route Resolver instead
    // https://prismic.io/docs/technologies/the-route-resolver-nextjs

    
    return "/";
  };
  
  export default linkResolver;