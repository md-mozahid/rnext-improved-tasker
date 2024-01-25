export default function TaskActions({ showAddTaskModal }) {
  return (
    <>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={() => showAddTaskModal(true)}>
        Add Task
      </button>
      <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
        Delete All
      </button>
    </>
  )
}
