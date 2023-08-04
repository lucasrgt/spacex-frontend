import { Launch } from '@/domain/models/launch'
import { FindRepository } from '../protocols'

export interface FindLaunchesRepository extends FindRepository<Launch> {}
