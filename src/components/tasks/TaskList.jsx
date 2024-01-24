import { useTask } from '../../context/TaskContext'
import Task from './Task'

export default function TaskList() {
  const tasks = useTask()

  return (
    <>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr className="">
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                Tags
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Priority
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
