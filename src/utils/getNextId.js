export const getNextId = (data) => {
  const maxId = data.reduce(
    (prev, curr) => (prev && prev.id > curr.id ? prev.id : curr.id),
    0
  )
  return maxId + 1
}
