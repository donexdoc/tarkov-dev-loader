import { ApolloQueryResult } from '@apollo/client'
import fetchItems from './api/items.js'
import { IItem } from './types/item.js'

console.log('GQL server: ', process.env.TARKOV_DEV_GQL_SERVER)

fetchItems()
  .then((response: ApolloQueryResult<{ items: IItem[] }>) => {
    console.log(response)
  })
  .catch((error: Error) => {
    console.error('Error fetching data:', error)
  })
