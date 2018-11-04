import faker from 'faker'
/*
  A user-collab looks like this 
  {
    userId: 134,
    collabId: 344,
    type: 'owner' | 'collaborator'
  }
*/

class UserCollabService {
  constructor () {
    this.userCollabs = this.getRandomUserCollabs(20)
  }
  addUserCollab (data) {
    this.userCollabs.push(data)
  }

  getUserCollab (id, mustFind = true) {
    const userCollab = this.userCollabs.find(uc => uc.id === id)
    if (mustFind && !userCollab) {
      return this.getRandomUserCollab()
    } else {
      return userCollab
    }
  }

  deleteUserCollab ({ userId, collabId }) {
    if (userId && collabId) {
      this.userCollabs = this.userCollabs.filter(uc => uc.userId === userId && uc.collabId === collabId)
    } else {
      if (userId) {
        this.userCollabs = this.userCollabs.filter(uc => uc.userId === userId)
      }

      if (collabId) {
        this.userCollabs = this.userCollabs.filter(uc => uc.userId === userId)
      }
    }
    
  }

  listUserCollabs () {
    return this.userCollabs
  }

  getRandomUserCollab () {
    return {
      id: faker.random.number(),
      name: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      skillLevel: faker.random.number(3), // 1 - Beginner, 2 - Intermediate, 3 - Advanced
      numberNeeded: faker.random.number(),
      dueDate: faker.date.future(),
      technologies: sampleSize(technologies, 3)
    }
  }

  getRandomUserCollabs (count = 10) {
    const userCollabs = []
    for (let i = 0; i < count; i++) {
      userCollabs.push(this.getRandomUserCollab())
    }
    return userCollabs
  }
}

export default new UserCollabService()
