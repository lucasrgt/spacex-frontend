import type { FindLaunchResultsRepository } from '@/data/repositories/launch/find-launch-results'
import { LaunchResults } from '@/domain/models/launch-results'
import { fetchLaunches } from '@/infra/state/redux/slice/launch-slice'
import { fetchResults } from '@/infra/state/redux/slice/results-slice'
import { store } from '@/infra/state/redux/store/store'

export class FindLaunchResultsRepositoryImpl
  implements FindLaunchResultsRepository
{
  findById(id: string): Promise<LaunchResults | null> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<LaunchResults[]> {
    const dispatch = store.dispatch
    await dispatch(fetchResults())
    return store.getState().launchResultsReducer.data!
  }
}
