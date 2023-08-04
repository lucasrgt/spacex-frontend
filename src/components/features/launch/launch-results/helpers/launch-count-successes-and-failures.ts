import { FindAllLaunchesController } from '@/application/controllers/launch/find-launch-controller'
import { Launch } from '@/domain/models/launch'
import { container } from 'tsyringe'

export const getLaunchSuccessesAndFailures = async () => {
  const response = await container.resolve(FindAllLaunchesController).handle()

  if (typeof response === 'string') {
    return { successes: 0, failures: 0 }
  }

  const launches: Launch[] = response

  let successes = 0
  let failures = 0

  launches.forEach((launch) => {
    if (launch.success) {
      successes++
    } else {
      failures++
    }
  })

  return { successes, failures }
}
