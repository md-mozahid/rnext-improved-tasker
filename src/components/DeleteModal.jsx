import { useDispatchTask } from '../context/TaskContext'

export default function DeleteModal({ id, onDeleteTask }) {
  const dispatch = useDispatchTask()

  return (
    <>
      <div className="bg-black bg-opacity-70 size-full top-0 left-0 absolute z-10"></div>
      <div className="py-10 flex flex-grow items-center justify-center absolute z-10 left-1/3">
        <div className="rounded-lg bg-slate-500 p-8 text-center shadow-xl w-[400px]">
          <h1 className="mb-4 text-2xl font-bold text-gray-200">
            Are you sure delete task ?
          </h1>
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
