import { ApolloQueryResult } from '@apollo/client'
import { Item } from './types/item.js'
import fetchItems from './api/items.js'

console.log('GQL server: ', process.env.TARKOV_DEV_GQL_SERVER)

fetchItems()
  .then((response: ApolloQueryResult<{ items: Item[] }>) => {
    for (const item of response.data.items) {
      if (item.usedInTasks.length) console.log(item.usedInTasks)
    }
  })
  .catch((error: Error) => {
    console.error('Error fetching data:', error)
  })
