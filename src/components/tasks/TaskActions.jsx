import { useState } from 'react'
import { useDispatchTask } from '../../context/TaskContext'
import DeleteAllModal from '../DeleteAllModal'

export default function TaskActions({ showAddTaskModal }) {
  const [deleteAllTask, setDeleteAllTask] = useState(false)
  const dispatch = useDispatchTask()

  return (
    <>
      {deleteAllTask && <DeleteAllModal onDeleteAllTask={setDeleteAllTask} />}
      <button>Test btn</button>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={() => {
          showAddTaskModal(true)

          dispatch({
            type: 'taskToUpdate',
            payload: null,
          })
        }}>
        Add Task
      </button>
      <button
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={() => setDeleteAllTask(true)}>
        Delete All
      </button>
    </>
  )
}
