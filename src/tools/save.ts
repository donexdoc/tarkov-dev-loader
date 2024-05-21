import { writeFile, mkdir } from 'fs/promises'
import { LANGUAGES } from 'src/constants.js'

interface SaveProperties {
  data: string
  lang?: LANGUAGES
  name: string
}
const SAVE_DIR = process.env.SAVE_DIR

export default function saveToFile({ data, lang, name }: SaveProperties) {
  let filePath = `${SAVE_DIR}/`

  if (lang) {
    filePath += `${lang}/`
  }

  mkdir(filePath, { recursive: true })
    .then(() => {
      writeFile(`${filePath}/${name}.json`, data, { flag: 'w+' }).catch((err) => {
        console.group('saving file fail: ')
        console.log(err)
      })
    })
    .catch((err) => {
      console.group('creating dir fail: ')
      console.log(err)
    })
}
