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
