import { TaskObjectiveItem } from './taskObjectiveItem.js'
import { Trader } from './trader.js'

export type Task = {
  id: string
  name: string
  normalizedName: string
  trader: Pick<Trader, 'id'>
  kappaRequired: boolean
  taskImageLink: string
  objectives: TaskObjectiveItem
}
