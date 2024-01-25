import { getNextId } from '../utils/getNextId'

export default function taskReducer(tasks, action) {
  console.log(action.task)
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: getNextId(tasks),
          task: action.task,
        },
      ]
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action' + action.type)
    }
  }
}
