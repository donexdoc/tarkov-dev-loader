import fetchTasks from './api/tasks.js'
import { LANGUAGES } from './constants.js'
import { instanceOfTaskObjectiveItem } from './types/taskObjectiveItem.js'

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
  })
  .catch((error: Error) => {
    console.error('Error fetching data:', error)
  })
