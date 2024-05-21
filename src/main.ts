// import { writeFile } from 'fs/promises'
import { LANGUAGES } from './constants.js'

import saveTasks from './controllers/task.controller.js'
import saveItems from './controllers/item.controller.js'
import saveTraders from './controllers/trader.controller.js'

async function loadData() {
  console.log('GQL server: ', process.env.TARKOV_DEV_GQL_SERVER)

  Object.values(LANGUAGES).forEach((language) => {
    console.log('Loading for language: ', language)

    saveTasks(language)
    saveItems(language)
    saveTraders(language)
  })
}

loadData().then(() => {
  console.log('all files saved')
})
