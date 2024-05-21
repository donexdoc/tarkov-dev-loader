import fetchTraders from 'src/api/traders.js'
import { LANGUAGES } from 'src/constants.js'
import saveToFile from 'src/tools/save.js'

const LITERAL = 'traders'

export default function saveTraders(lang: LANGUAGES) {
  console.log('Starting load - ', LITERAL)
  fetchTraders(lang)
    .then(({ traders }) => {
      const jsonTraders = JSON.stringify(traders)

      saveToFile({ data: jsonTraders, lang: lang, name: LITERAL })
    })
    .catch((error: Error) => {
      console.error('Error fetching data:', error)
    })
}
