export default function taskReducer(tasks, action) {

  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: 4,
          task: action.task,
        },
      ]
    }
  }
}
