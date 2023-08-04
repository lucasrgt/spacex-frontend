import { Launch } from './launch'

export interface PaginatedLaunch {
  results: Launch[]
  totalDocs: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}
