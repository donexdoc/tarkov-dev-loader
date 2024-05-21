import fetchTasks from 'src/api/tasks.js'
import { LANGUAGES } from 'src/constants.js'
import saveToFile from 'src/tools/save.js'

const LITERAL = 'tasks'

export default async function saveTasks(lang: LANGUAGES) {
  console.log('Starting load - ', LITERAL)
  return fetchTasks(lang)
    .then(({ tasks }) => {
      const jsonTasks = JSON.stringify(tasks)

      saveToFile({ data: jsonTasks, lang: lang, name: LITERAL })

      return tasks
    })
    .catch((error: Error) => {
      console.error('Error fetching data:', error)
    })
}
