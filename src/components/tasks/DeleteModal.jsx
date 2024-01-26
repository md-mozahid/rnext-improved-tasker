import { useDispatchTask } from '../../context/TaskContext'

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
              stroke="#ef4444"
              className="size-16 mb-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
              />
            </svg>
            <h1 className="mb-4 text-3xl font-bold text-gray-200">
              Are you sure delete task ?
            </h1>
          </div>

          <div className="flex justify-end space-x-5 mt-10">
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
