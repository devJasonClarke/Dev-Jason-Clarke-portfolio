import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

export const endpoint = prismic.getEndpoint(process.env.API_ENDPOINT)
export const repositoryName = prismic.getRepositoryName(endpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}