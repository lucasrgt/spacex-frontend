import { FindLaunchResultsController } from '@/application/controllers/launch/find-launch-chart-data-results'

import { LaunchResults } from '@/domain/models/launch-results'

import { container } from 'tsyringe'

export const getLaunchSuccessesAndFailures = async () => {
  const response = await container.resolve(FindLaunchResultsController).handle()

  console.log(response)

  const results: LaunchResults[] = response

  let successes = 0
  let failures = 0

  results.map((result: LaunchResults) => {
    if (result.success) {
      successes++
    } else {
      failures++
    }
  })

  return { successes, failures }
}
