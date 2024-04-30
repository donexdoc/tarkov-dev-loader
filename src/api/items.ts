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

interface IItems {
  items: Item[]
}

export default async function fetchItems(lang: LANGUAGES = LANGUAGES.EN): Promise<IItems> {
  return fetchElements<IItems>(QUERY, lang).then((data) => {
    return data.data
  })
}
