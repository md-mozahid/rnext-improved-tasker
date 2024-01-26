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
  {
    id: 2,
    title: 'API Data Synchronization with Python',
    description:
      'Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.',
    tags: ['React', 'Redux', 'Zustan'],
    favorite: true,
    priority: 'easy',
  },
]

export default function taskReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          ...action.payload,
          favorite: false,
        },
      ]
    }

    case 'editedTask': {
      const edited = tasks.map((t) => {
        if (t.id === action.payload.id) {
          return action.task
        } else {
          return t
        }
      })
      console.log(edited)
      return edited
    }

    case 'deleted': {
      return tasks.filter((t) => t.id !== action.payload.id)
    }

    case 'deleteAllTask': {
      return tasks.filter((t) => (t.length = 0))
    }

    case 'favoriteTask': {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, favorite: !task.favorite }
        } else {
          return task
        }
      })
    }

    default: {
      throw Error('Unknown action' + action.type)
    }
  }
}
