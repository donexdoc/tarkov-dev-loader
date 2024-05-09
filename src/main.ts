// import { writeFile } from 'fs/promises'
import fetchTasks from './api/tasks.js'
import { LANGUAGES } from './constants.js'
import { instanceOfTaskObjectiveItem } from './types/taskObjectiveItem.js'
import saveToFile from './tools/save.js'

console.log('GQL server: ', process.env.TARKOV_DEV_GQL_SERVER)

fetchTasks(LANGUAGES.EN)
  .then(({ tasks }) => {
    for (const task of tasks) {
      if (task.objectives.length)
        for (const objective of task.objectives) {
          if (instanceOfTaskObjectiveItem(objective)) {
            console.log(objective.items)
          }
        }
    }
    const jsonTasks = JSON.stringify(tasks)

    saveToFile({ data: jsonTasks, lang: LANGUAGES.EN, name: 'tasks' })
  })
  .catch((error: Error) => {
    console.error('Error fetching data:', error)
  })
