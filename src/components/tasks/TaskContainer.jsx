import { useState } from 'react'
import AddTaskModal from './AddTaskModal'
import TaskHeader from './TaskHeader'
import TaskList from './TaskList'

export default function TaskContainer() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddTaskModal && (
          <AddTaskModal showAddTaskModal={setShowAddTaskModal} />
        )}
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskHeader showAddTaskModal={setShowAddTaskModal} />
            <TaskList setShowAddTaskModal={setShowAddTaskModal} />
          </div>
        </div>
      </section>
    </>
  )
}
