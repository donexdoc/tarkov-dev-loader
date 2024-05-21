import { LANGUAGES } from '@/constants.js'
import fetchElements from './fetch.js'
import { Task } from '@/types/task.js'

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

export interface Tasks {
  tasks: Task[]
}

export default async function fetchTasks(lang: LANGUAGES = LANGUAGES.EN): Promise<Tasks> {
  return fetchElements<Tasks>(QUERY, lang).then((data) => {
    return data.data
  })
}
