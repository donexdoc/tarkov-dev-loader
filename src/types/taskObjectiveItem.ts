import { Item } from './item.js'
import { TaskObjective } from './taskObjective.js'

export interface TaskObjectiveItem extends TaskObjective {
  item?: Item
  items?: Item[]
  foundInRad?: boolean
  count?: number
}

export function instanceOfTaskObjectiveItem(taskObjective: TaskObjective): taskObjective is TaskObjectiveItem {
  return 'items' in taskObjective
}
