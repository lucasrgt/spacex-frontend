import { FindAllLaunchesController } from '@/application/controllers/launch/find-launch-controller'
import { Launch } from '@/domain/models/launch'
import { PaginatedLaunch } from '@/domain/models/paginated-launch-chart-data'
import { container } from 'tsyringe'

export const getLaunchSuccessesAndFailures = async () => {
  const response = await container.resolve(FindAllLaunchesController).handle()

  if (typeof response === 'string' || response == null) {
    return { successes: 0, failures: 0 }
  }

  const paginatedLaunches: PaginatedLaunch[] = response

  let successes = 0
  let failures = 0

  paginatedLaunches.forEach((paginatedLaunch) => {
    paginatedLaunch.results.forEach((launch: Launch) => {
      if (launch.success) {
        successes++
      } else {
        failures++
      }
    })
  })

  return { successes, failures }
}
