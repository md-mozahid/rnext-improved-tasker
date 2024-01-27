import { useState } from 'react'
import { useDispatchTask } from '../../context/TaskContext'
import { randomBgColors } from '../../utils/randomBgColors'
import DeleteModal from '../DeleteModal'

export default function Task({ task, setShowAddTaskModal }) {
  const [deleteTask, setDeleteTask] = useState(false)
  const [tagColors] = useState(randomBgColors)
  const { id, title, description, tags, priority, favorite } = task

  const dispatch = useDispatchTask()

  return (
    <>
      {deleteTask && <DeleteModal id={id} onDeleteTask={setDeleteTask} />}
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={favorite ? 'yellow' : 'gray'}
            fill={favorite ? 'yellow' : 'gray'}
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
              onClick={() =>
                dispatch({
                  type: 'favoriteTask',
                  payload: { id },
                })
              }
            />
          </svg>
        </td>
        <td>{title}</td>
        <td>
          <div>{description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {tags?.map((tag, i) => {
              const randomIndex = Math.round(
                Math.random() * (tagColors.length - 1)
              )
              return (
                <li key={i}>
                  <span
                    style={{ background: tagColors[randomIndex] }}
                    className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}>
                    {tag}
                  </span>
                </li>
              )
            })}
          </ul>
        </td>
        <td className="text-center">{priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="text-red-500"
              onClick={() =>
                // dispatch({
                //   type: 'deleted',
                //   payload: { id },
                // })
                setDeleteTask(true)
              }>
              Delete
            </button>
            <button
              className="text-blue-500"
              onClick={() => {
                setShowAddTaskModal(true)
                dispatch({
                  type: 'taskToUpdate',
                  payload: task,
                })
              }}>
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}
