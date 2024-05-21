import fetchItems from 'src/api/items.js'
import { LANGUAGES } from 'src/constants.js'
import saveToFile from 'src/tools/save.js'

const LITERAL = 'items'

export default async function saveItems(lang: LANGUAGES) {
  console.log('Starting load - ', LITERAL)
  return fetchItems(lang)
    .then(({ items }) => {
      const jsonItems = JSON.stringify(items)

      saveToFile({ data: jsonItems, lang: lang, name: LITERAL })

      return items
    })
    .catch((error: Error) => {
      console.error('Error fetching data:', error)
    })
}
