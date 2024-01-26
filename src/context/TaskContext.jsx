import { createContext, useContext, useReducer } from 'react'

export const TaskContext = createContext(null)
export const TaskDispatchContext = createContext(null)

import taskReducer, { initialTasks } from '../reducers/TaskReducer'

const initialState = {
  tasks: initialTasks,
  taskToUpdate: null,
  search: ''
}

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

// eslint-disable-next-line react-refresh/only-export-components
export function useTask() {
  return useContext(TaskContext)
}
// eslint-disable-next-line react-refresh/only-export-components
export function useDispatchTask() {
  return useContext(TaskDispatchContext)
}
