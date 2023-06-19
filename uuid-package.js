import { v4 } from 'uuid'

const times = []

for (let thread = 0; thread < 4; thread++) {
  const startedDate = new Date()

  for (let i = 0; i < 1E6; i++) {
    v4()
  }

  const endedDate = new Date()

  times.push(endedDate - startedDate)
}

const average = times.reduce((acc, time) => acc + time, 0) / times.length

console.info('uuid package: %dms', average)