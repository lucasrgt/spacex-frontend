import type { FindLaunchChartDataRepository } from '@/data/repositories/launch/find-launch-chart-data-repository'
import { LaunchChartData } from '@/domain/models/launch-chart-data'
import { fetchChartData } from '@/infra/state/redux/slice/chart-data-slice'
import { store } from '@/infra/state/redux/store/store'

export class FindLaunchChartDataRepositoryImpl
  implements FindLaunchChartDataRepository
{
  findById(id: string): Promise<LaunchChartData | null> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<LaunchChartData[]> {
    const dispatch = store.dispatch
    await dispatch(fetchChartData())
    return store.getState().launchChartDataReducer.data!
  }
}
