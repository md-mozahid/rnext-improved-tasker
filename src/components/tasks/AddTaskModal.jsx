import { useState } from 'react'
import { useDispatchTask, useTask } from '../../context/TaskContext'
import { getNextId } from '../../utils/getNextId'

export default function AddTaskModal({ showAddTaskModal }) {
  const [text, setText] = useState({
    title: '',
    description: '',
    tags: [],
    priority: '',
    favorite: false,
  })
  const [errors, setErrors] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // function for validation
  const validateValues = (inputValues) => {
    let errors = {}
    if (inputValues.title === '') {
      errors.title = 'Required title field'
    }
    if (inputValues.description === '') {
      errors.description = 'Required description field'
    }
    if (inputValues.tags.length === 0) {
      errors.tags = 'Required tags field'
    }
    if (inputValues.priority === '') {
      errors.priority = 'Required priority field'
    }
    return errors
  }

  const tasks = useTask()
  const dispatch = useDispatchTask()

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value

    if (name === 'tags') {
      value = value.split(',')
    }
    setText({ ...text, [name]: value })
  }

  // event prevent default
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateValues(text))
    setSubmitting(true)
    dispatch({
      type: 'added',
      payload: text,
      id: getNextId(tasks),
    })
    setText('')
  }
  return (
    <>
      <div className="bg-black bg-opacity-70 size-full top-0 left-0 absolute z-10"></div>
      <form
        className="absolute z-10 left-1/3 top-[10%]  mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
        onSubmit={handleSubmit}>
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={text.title}
              onChange={handleChange}
            />
            <span className="text-rose-500">{errors.title}</span>
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={text.description}
              onChange={handleChange}></textarea>
            <span className="text-rose-500">{errors.description}</span>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={text.tags}
                onChange={handleChange}
              />
              <span className="text-rose-500">{errors.tags}</span>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={text.priority}
                onChange={handleChange}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <span className="text-rose-500">{errors.priority}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-around lg:mt-20">
          <button
            className="rounded bg-rose-500 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => showAddTaskModal(false)}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
            Create new Task
          </button>
        </div>
      </form>
    </>
  )
}
