import { useDispatchTask } from '../../context/TaskContext'

export default function DeleteModal() {
  const dispatch = useDispatchTask()
  return (
    <>
    <div className="bg-slate-700 bg-opacity-70 absolute"></div>
      <div className="py-10 flex flex-grow items-center justify-center">
        <div className="rounded-lg bg-slate-500 p-8 text-center shadow-xl w-[500px]">
          <h1 className="mb-4 text-3xl font-bold text-gray-200">
            Are you sure delete all task ?
          </h1>
          <div className="flex justify-end space-x-5 mt-10">
            <a className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
              Close
            </a>
            <a
              className="mt-4 inline-block rounded bg-rose-500 px-4 py-2 font-semibold text-white hover:bg-rose-600"
              onClick={() => dispatch({ type: 'deleteAllTask' })}>
              Confirm
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
