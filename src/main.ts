import fetchItems from './api/items.js'
import { LANGUAGES } from './constants.js'

console.log('GQL server: ', process.env.TARKOV_DEV_GQL_SERVER)

fetchItems(LANGUAGES.EN)
  .then(({ items }) => {
    console.log(items)
  })
  .catch((error: Error) => {
    console.error('Error fetching data:', error)
  })
