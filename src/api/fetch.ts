import { LANGUAGES } from 'src/constants.js'
import { apiClient } from './client.js'
import { format } from 'util'
import { ApolloQueryResult, gql } from '@apollo/client/core/index.js'

export default async function fetchElements<T>(
  query: string,
  lang: LANGUAGES = LANGUAGES.RU,
): Promise<ApolloQueryResult<T>> {
  return apiClient.query({
    query: gql(format(query, lang)),
  })
}
