import fetchItems from '@/api/items.js'
import { LANGUAGES } from '@/constants.js'
import saveToFile from '@/tools/save.js'

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
