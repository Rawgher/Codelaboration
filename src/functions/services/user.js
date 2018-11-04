import faker from 'faker'

class UserService {
  constructor () {
    this.users = this.getRandomUsers(50)
  }
  addUser (data) {
    this.users.push(data)
  }

  getUser (id, mustFindUser = true) {
    const user = this.users.find(user => user.id === id)
    if (mustFindUser && !user) {
      return this.getRandomUser()
    } else {
      return user
    }
  }

  deleteUser (id) {
    this.users = this.users.filter(user => user.id === id)
  }

  listUsers () {
    return this.users
  }

  getRandomUser () {
    return {
      id: faker.random.number(),
      email: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`
    }
  }

  getRandomUsers (count = 10) {
    const users = []
    for (let i = 0; i < count; i++) {
      users.push(this.getRandomUser())
    }
    return users
  }
}

export default new UserService()