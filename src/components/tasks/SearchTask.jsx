import { useState } from 'react'
import { useTask } from '../../context/TaskContext'

export default function SearchTask() {
  const [search, setSearch] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const tasks = useTask()

  const filterByString = (task) => 
    task.title.toLowerCase().includes(searchValue.toLowerCase())

    // console.log(task)
  

  tasks.filter(filterByString)

  const handleSearchFilter = (value) => {
    setSearchValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
              placeholder="Search Task"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              onClick={() => handleSearchFilter(search)}>
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
