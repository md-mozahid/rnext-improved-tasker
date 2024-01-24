import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";

export default function TaskHeader() {
  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <SearchTask />
          <TaskActions />
        </div>
      </div>
    </>
  );
}
