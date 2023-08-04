import 'reflect-metadata'

import { FindLaunchesRepository } from '@/data/repositories/launch/find-launch-repository'
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
}
