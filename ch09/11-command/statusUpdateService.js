// 9-6-2 좀더 복잡한 명령

const statusUpdates = new Map()

// 대상(Target)
export const statusUpdateService = {
  postUpdate (status) {
    const id = Math.floor(Math.random() * 1000000)
    statusUpdates.set(id, status)
    console.log(`Status posted: ${status}`)
    return id
  },

  destroyUpdate (id) {
    statusUpdates.delete(id)
    console.log(`Status removed: ${id}`)
  }
}