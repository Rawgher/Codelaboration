import faker from 'faker'
import { sampleSize }  from 'lodash'
/*
  A collab looks like this 
  {
    id: 134,
    name: 'A collab',
    description: 'A collab description',
    skillLevel: 1 // 1 - Beginner, 2 - Intermediate, 3 - Advanced
    numberNeeded: 1,
    dueDate: '2019-01-01',
    technologies: ['react', 'node']
  }
*/

const technologies = ['react', 'redux', 'node', 'python', 'javascript', 'c++', 'git', 'doc', 'angular', 'vue', 'jamstack', 'serverless']
class CollabService {
  constructor () {
    this.collabs = this.getRandomCollabs(20)
  }
  addCollab (data) {
    this.collabs.push(data)
  }

  getCollab (id, mustFindCollab = true) {
    const collab = this.collabs.find(collab => collab.id === id)
    if (mustFindCollab && !collab) {
      return this.getRandomCollab()
    } else {
      return collab
    }
  }

  deleteCollab (id) {
    this.collab = this.collabs.filter(collab => collab.id === id)
  }

  listCollabs () {
    return this.collabs
  }

  getRandomCollab () {
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

  getRandomCollabs (count = 10) {
    const collabs = []
    for (let i = 0; i < count; i++) {
      collabs.push(this.getRandomCollab())
    }
    return collabs
  }
}

export default new CollabService()
