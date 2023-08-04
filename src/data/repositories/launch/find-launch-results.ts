import { LaunchResults } from '@/domain/models/launch-results'
import { FindRepository } from '../protocols'

export interface FindLaunchResultsRepository
  extends FindRepository<LaunchResults> {}
