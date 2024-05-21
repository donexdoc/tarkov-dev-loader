import { Trader } from '@/types/trader.js'
import fetchElements from './fetch.js'
import { LANGUAGES } from '@/constants.js'

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

export interface Traders {
  traders: Trader[]
}
export default async function fetchTraders(lang: LANGUAGES = LANGUAGES.EN): Promise<Traders> {
  return fetchElements<Traders>(QUERY, lang).then((data) => {
    return data.data
  })
}
