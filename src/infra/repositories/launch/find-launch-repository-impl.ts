import { FindLaunchesRepository } from '@/data/repositories/launch/find-launch-repository'
import type { Launch } from '@/domain/models/launch'
import { fetchLaunches } from '@/infra/state/redux/slice/launch-slice'
import { store } from '@/infra/state/redux/store/store'

export class FindLaunchesRepositoryImpl implements FindLaunchesRepository {
  findById(id: string): Promise<Launch | null> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<Launch[]> {
    const dispatch = store.dispatch
    await dispatch(fetchLaunches())
    return store.getState().launchReducer.data!
  }
}
