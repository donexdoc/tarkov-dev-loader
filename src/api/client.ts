import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js'

export const apiClient = new ApolloClient({
  uri: process.env.TARKOV_DEV_GQL_SERVER,
  cache: new InMemoryCache(),
})
