import { LANGUAGES } from './constants.js'

import saveTasks from './controllers/task.controller.js'
import saveItems from './controllers/item.controller.js'
import saveTraders from './controllers/trader.controller.js'
import { Task } from './types/task.js'
import { getTaskItems, saveTaskItems } from './controllers/taskItem.controller.js'

async function saveData() {
  console.log('GQL server: ', process.env.TARKOV_DEV_GQL_SERVER)

  let taskItemsLoaded = false

  Object.values(LANGUAGES).forEach((language) => {
    console.log('Loading for language: ', language)

    const saveAll = [
      saveTasks(language), // tasks
      saveItems(language), // items
      saveTraders(language), // traders
    ]

    Promise.all(saveAll).then(([tasks]) => {
      if (!taskItemsLoaded) {
        const loadedTasks = tasks as Task[]
        const taskItems = getTaskItems(loadedTasks)
        saveTaskItems(taskItems)
        taskItemsLoaded = true
      }
    })
  })
}

saveData().then(() => {
  console.log('all files saved')
})
