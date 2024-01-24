/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react'

export const TaskContext = createContext(null)
export const TaskDispatchContext = createContext(null)

// initial tasks
import { initialTasks } from '../db/db'
import taskReducer from '../reducers/TaskReducer'

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext)
}
export function useDispatchTask() {
  return useContext(TaskDispatchContext)
}
