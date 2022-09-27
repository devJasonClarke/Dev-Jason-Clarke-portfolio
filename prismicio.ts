import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export const endpoint = prismic.getEndpoint(process.env.API_ENDPOINT);
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/";
    case "blog_post":
      return `blog/${doc.uid}`;
    default:
      return null;
  }
}

export const Router = {
  routes: [
    {
      type: "blog_post",
      path: "/blog?/:blog/",
      resolvers: {
        folder: "blog"
      }
    }
  ],
  href: (type) => {
    const route = Router.routes.find((r) => r.type === type);
    return route && route.href;
  }
};

export const Client = (req = null, options = {}) =>
  createClient(endpoint, Object.assign({ routes: Router.routes }, options));

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  });

  return client;
}
