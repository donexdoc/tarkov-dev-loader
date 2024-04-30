import { Item } from './item.js'
import { TaskObjective } from './taskObjective.js'

export type TaskObjectiveItem = TaskObjective &
  Partial<{
    item: Item
    items: Item[]
    foundInRad: boolean
    count: number
  }>
