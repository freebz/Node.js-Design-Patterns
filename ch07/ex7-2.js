// 7-1-2 갭슐화를 강제할 수 있는 메커니즘

function createPerson (name) {
  const privateProperties = {}

  const person = {
    setName (name) {
      if (!name) {
        throw new Error('A person must have a name')
      }
      privateProperties.name = name
    },
    getName () {
      return privateProperties.name
    }
  }

  person.setName(name)
  return person
}