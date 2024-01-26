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
    title: 'Server Side Rendering',
    description:
      'Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.',
    tags: ['React', 'Redux', 'Zustan'],
    favorite: true,
    priority: 'high',
  },
]

export default function taskReducer(state, action) {
  switch (action.type) {
    case 'added': {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    }

    case 'editedTask': {
      const updatedTasks = state.tasks.map((t) => {
        if (t.id === action.payload?.id) {
          return action.payload
        } else {
          return t
        }
      })
      return { ...state, tasks: updatedTasks }
    }

    case 'deleted': {
      const filterTasks = state.tasks.filter((t) => t.id !== action.payload.id)
      return { ...state, tasks: filterTasks }
    }

    case 'deleteAllTask': {
      return { ...state, tasks: [] }
    }

    case 'favoriteTask': {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, favorite: !task.favorite }
        } else {
          return task
        }
      })
      return { ...state, tasks: updatedTasks }
    }

    case 'taskToUpdate': {
      return {
        ...state,
        taskToUpdate: action.payload,
      }
    }

    case 'search': {
      return {
        ...state,
        search: action.payload,
      }
    }

    default: {
      throw Error('Unknown action' + action.type)
    }
  }
}
