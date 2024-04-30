import { Trader } from 'src/types/trader.js'
import fetchElements from './fetch.js'
import { LANGUAGES } from 'src/constants.js'

const QUERY = `
{
  traders(lang: %s) {
    id
    name
    normalizedName
    imageLink
  }
}
`

interface ITraders {
  traders: Trader[]
}
export default async function fetchTraders(lang: LANGUAGES = LANGUAGES.EN): Promise<ITraders> {
  return fetchElements<ITraders>(QUERY, lang).then((data) => {
    return data.data
  })
}
