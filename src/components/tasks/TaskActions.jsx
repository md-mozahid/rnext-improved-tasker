import { useState } from 'react'
import { useDispatchTask } from '../../context/TaskContext'
import Button from '../Button'
import DeleteAllModal from '../DeleteAllModal'

export default function TaskActions({ showAddTaskModal }) {
  const [deleteAllTask, setDeleteAllTask] = useState(false)
  const dispatch = useDispatchTask()

  return (
    <>
      {deleteAllTask && <DeleteAllModal onDeleteAllTask={setDeleteAllTask} />}
      <Button
        className="bg-blue-500 "
        onClick={() => {
          showAddTaskModal(true)

          dispatch({
            type: 'taskToUpdate',
            payload: null,
          })
        }}>
        Add Task
      </Button>
      <Button
        className="bg-red-500"
        onClick={() => setDeleteAllTask(true)}>
        Delete All
      </Button>
    </>
  )
}
