import { FindLaunchChartDataRepository } from '@/data/repositories/launch/find-launch-chart-data-repository'
import { FindLaunchesRepository } from '@/data/repositories/launch/find-launch-repository'
import { FindLaunchChartDataRepositoryImpl } from '@/infra/repositories/launch/find-launch-chart-data-repository-impl'
import { FindLaunchesRepositoryImpl } from '@/infra/repositories/launch/find-launch-repository-impl'
import { container } from 'tsyringe'

export default () => {
  _registerLaunch()
}

const _registerLaunch = () => {
  container.registerSingleton<FindLaunchesRepository>(
    'FindLaunchesRepository',
    FindLaunchesRepositoryImpl
  )
  container.registerSingleton<FindLaunchChartDataRepository>(
    'FindLaunchChartDataRepository',
    FindLaunchChartDataRepositoryImpl
  )
}
