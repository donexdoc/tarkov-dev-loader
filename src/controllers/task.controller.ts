import fetchTasks from '@/api/tasks.js'
import { LANGUAGES } from '@/constants.js'
import saveToFile from '@/tools/save.js'

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
