import { FindLaunchesRepository } from '@/data/repositories/launch/find-launch-repository'
import { PaginatedLaunch } from '@/domain/models/paginated-launch-chart-data'
import { fetchLaunches } from '@/infra/state/redux/slice/launch-slice'
import { store } from '@/infra/state/redux/store/store'

export class FindLaunchesRepositoryImpl implements FindLaunchesRepository {
  findById(id: string): Promise<PaginatedLaunch | null> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<PaginatedLaunch> {
    const dispatch = store.dispatch
    await dispatch(fetchLaunches())
    return store.getState().launchReducer.data!
  }
}
