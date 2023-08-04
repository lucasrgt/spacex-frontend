import { Launch } from './launch'

export interface PaginatedLaunches {
  results: Launch[]
  totalDocs: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

interface Core {
  core?: string
  flight?: number
  gridfins?: boolean
  legs?: boolean
  reused?: boolean
  landing_attempt?: boolean
  landing_success?: boolean
  landing_type?: string
  landpad?: string
}
