import saveToFile from '@/tools/save.js'
import { Item } from '@/types/item.js'
import { Task } from '@/types/task.js'
import { TaskItem } from '@/types/taskItem.js'
import { instanceOfTaskObjectiveItem } from '@/types/taskObjectiveItem.js'

const LITERAL = 'taskItems'
const SAVING_TYPE = 'findItem'

export function getTaskItems(tasks: Task[]) {
  const taskItems: TaskItem[] = []

  const addItems = (task: Task, items: Item[], count: number | undefined, foundInRaid: boolean | undefined) => {
    items.forEach((item) => {
      taskItems.push({
        taskId: task.id,
        itemId: item.id,
        count,
        foundInRaid,
      })
    })
  }

  for (const task of tasks) {
    if (task.objectives.length) {
      for (const objective of task.objectives) {
        if (instanceOfTaskObjectiveItem(objective) && objective.items && objective.type === SAVING_TYPE) {
          addItems(task, objective.items, objective.count, objective.foundInRaid)
        }
      }
    }
  }

  return taskItems
}

export function saveTaskItems(taskItems: TaskItem[]) {
  const jsonItems = JSON.stringify(taskItems)

  saveToFile({ data: jsonItems, name: LITERAL })
}
