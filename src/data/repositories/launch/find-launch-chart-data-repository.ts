import { LaunchChartData } from '@/domain/models/launch-chart-data'
import { FindRepository } from '../protocols'

export interface FindLaunchChartDataRepository
  extends FindRepository<LaunchChartData> {}
