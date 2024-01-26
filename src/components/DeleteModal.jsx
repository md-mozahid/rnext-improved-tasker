import { useDispatchTask } from '../context/TaskContext'

export default function DeleteModal({ id, onDeleteTask }) {
  const dispatch = useDispatchTask()

  return (
    <>
      <div className="bg-black bg-opacity-70 size-full top-0 left-0 absolute z-10"></div>
      <div className="py-10 flex flex-grow items-center justify-center absolute z-10 left-1/3">
        <div className="rounded-lg bg-slate-500 p-8 text-center shadow-xl w-[500px]">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#dc2626"
              className="size-16 mb-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <h1 className="mb-4 text-3xl font-bold text-gray-200">
              Are you sure delete task ?
            </h1>
          </div>

          <div className="flex justify-end space-x-5 mt-5">
            <button
              className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
              onClick={() => onDeleteTask(false)}>
              Close
            </button>
            <button
              className="mt-4 inline-block rounded bg-rose-500 px-4 py-2 font-semibold text-white hover:bg-rose-600"
              onClick={() => {
                dispatch({
                  type: 'deleted',
                  payload: { id },
                })
              }}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
