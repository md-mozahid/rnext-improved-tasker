import { useDispatchTask } from '../context/TaskContext'
import Button from './Button'

export default function DeleteAllModal({ onDeleteAllTask }) {
  const dispatch = useDispatchTask()

  return (
    <>
      <div className="bg-black bg-opacity-70 size-full top-0 left-0 absolute z-10"></div>
      <div className="py-10 flex flex-grow items-center justify-center absolute z-10 left-1/3 transition-all">
        <div className="rounded-lg bg-slate-500 p-8 text-center shadow-xl w-[400px]">
          <h1 className="mb-4 text-2xl font-bold text-gray-200">
            Are you sure delete all task ?
          </h1>
          <div className="flex justify-end space-x-5 mt-5">
            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => onDeleteAllTask(false)}>
              Close
            </Button>
            <Button
              className="bg-rose-500 hover:bg-rose-600"
              onClick={() => {
                dispatch({ type: 'deleteAllTask' })
                onDeleteAllTask(false)
              }}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
