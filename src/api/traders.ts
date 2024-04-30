import { ApolloQueryResult, gql } from '@apollo/client/core'
import { apiClient } from './client.js'
import { Trader } from 'src/types/trader.js'

export default function fetchTraders(): Promise<ApolloQueryResult<{ traders: Trader[] }>> {
  return apiClient.query({
    query: gql`
      {
        traders(lang: ru) {
          id
          name
          normalizedName
          imageLink
        }
      }
    `,
  })
}
