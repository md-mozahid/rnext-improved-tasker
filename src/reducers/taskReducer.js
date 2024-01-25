export const initialTasks = [
  {
    id: 1,
    title: 'Integration API',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    tags: ['web', 'api', 'dev'],
    favorite: false,
    priority: 'medium',
  },
]

export default function taskReducer(tasks, action) {
  setTimeout(() => {
    console.log(tasks)
  }, 1000)
  console.log(action.task)
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          ...action.task,
          favorite: false,
        },
      ]
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    case 'deleteAllTask': {
      return [(tasks.length = 0)]
    }
    default: {
      throw Error('Unknown action' + action.type)
    }
  }
}
