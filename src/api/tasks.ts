import { LANGUAGES } from 'src/constants.js'
import fetchElements from './fetch.js'
import { Task } from 'src/types/task.js'

const QUERY = `
{
  tasks(lang: %s) {
    id
    name
    normalizedName
    trader { id }
    kappaRequired
    taskImageLink
    objectives {
      id
      type
      description
      optional
      ... on TaskObjectiveItem {
        item {
          id
        }
        items {
          id
        }
        foundInRaid
        count
      }
    }
  }
}
`

interface ITasks {
  tasks: Task[]
}

export default async function fetchTasks(lang: LANGUAGES = LANGUAGES.EN): Promise<ITasks> {
  return fetchElements<ITasks>(QUERY, lang).then((data) => {
    return data.data
  })
}
