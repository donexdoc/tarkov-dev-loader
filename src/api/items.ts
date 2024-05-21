import { Item } from 'src/types/item.js'
import { LANGUAGES } from 'src/constants.js'
import fetchElements from './fetch.js'

const QUERY = `
{
  items(lang: %s) {
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
`

export interface Items {
  items: Item[]
}

export default async function fetchItems(lang: LANGUAGES = LANGUAGES.EN): Promise<Items> {
  return fetchElements<Items>(QUERY, lang).then((data) => {
    return data.data
  })
}
