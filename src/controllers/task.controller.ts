import fetchTasks from 'src/api/tasks.js'
import { LANGUAGES } from 'src/constants.js'
import saveToFile from 'src/tools/save.js'
// import { instanceOfTaskObjectiveItem } from 'src/types/taskObjectiveItem.js'

const LITERAL = 'tasks'

export default function saveTasks(lang: LANGUAGES) {
  console.log('Starting load - ', LITERAL)
  fetchTasks(lang)
    .then(({ tasks }) => {
      // for (const task of tasks) {
      //   if (task.objectives.length)
      //     for (const objective of task.objectives) {
      //       if (instanceOfTaskObjectiveItem(objective)) {
      //         console.log(objective.items)
      //       }
      //     }
      // }
      const jsonTasks = JSON.stringify(tasks)

      saveToFile({ data: jsonTasks, lang: lang, name: LITERAL })
    })
    .catch((error: Error) => {
      console.error('Error fetching data:', error)
    })
}
