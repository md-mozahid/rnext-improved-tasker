import { createContext, useContext, useReducer } from 'react'

// create context
export const TaskContext = createContext(null)
export const TaskDispatchContext = createContext(null)

import { initialTasks } from '../reducers/initialTasks'
import taskReducer from '../reducers/taskReducer'

const initialState = {
  tasks: initialTasks,
  taskToUpdate: null,
  search: '',
}

// create provider
export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

// create custom hook
// eslint-disable-next-line react-refresh/only-export-components
export function useTask() {
  return useContext(TaskContext)
}
// eslint-disable-next-line react-refresh/only-export-components
export function useDispatchTask() {
  return useContext(TaskDispatchContext)
}
