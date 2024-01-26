import { useState } from 'react'
import DeleteModal from './DeleteModal'

export default function TaskActions({ showAddTaskModal }) {
  const [deleteTask, setDeleteTask] = useState(false)

  return (
    <>
    {deleteTask && <DeleteModal />}
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={() => showAddTaskModal(true)}>
        Add Task
      </button>
      <button
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={() => setDeleteTask(true)}>
        Delete All
      </button>
    </>
  )
}
