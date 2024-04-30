import { ApolloQueryResult, gql } from '@apollo/client/core'
import { apiClient } from './client.js'
import { Item } from 'src/types/item.js'

export default function fetchItems(): Promise<ApolloQueryResult<{ items: Item[] }>> {
  return apiClient.query({
    query: gql`
      {
        items(lang: ru) {
          id
          name
          shortName
          image512pxLink
          types
          usedInTasks {
            id
          }
        }
      }
    `,
  })
}
