import { PaginatedLaunch } from '@/domain/models/paginated-launch-chart-data'
import { FindRepository } from '../protocols'

export interface FindLaunchesRepository
  extends FindRepository<PaginatedLaunch> {}
