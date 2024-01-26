import { useState } from 'react'
import AddTaskModal from './tasks/AddTaskModal'

export default function NoTaskFound() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div className="py-10 flex flex-grow items-center justify-center">
        <div className="rounded-lg bg-gray-200 p-8 text-center shadow-xl w-[500px]">
          {/* <h1 className="mb-4 text-4xl font-bold text-gray-200">404</h1> */}
          <p className="text-gray-600 text-2xl mb-5">Task List is empty!.</p>
          <button
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            onClick={() => setModal(true)}>
            Create New Task
          </button>
        </div>
      </div>
      {modal && <AddTaskModal />}
    </>
  )
}
