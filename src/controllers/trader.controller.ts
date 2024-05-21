import fetchTraders from '@/api/traders.js'
import { LANGUAGES } from '@/constants.js'
import saveToFile from '@/tools/save.js'

const LITERAL = 'traders'

export default async function saveTraders(lang: LANGUAGES) {
  console.log('Starting load - ', LITERAL)
  return fetchTraders(lang)
    .then(({ traders }) => {
      const jsonTraders = JSON.stringify(traders)

      saveToFile({ data: jsonTraders, lang: lang, name: LITERAL })

      return traders
    })
    .catch((error: Error) => {
      console.error('Error fetching data:', error)
    })
}
