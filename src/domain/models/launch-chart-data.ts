export interface ChartData {
  id: string
  cores: Core[]
  date_utc: string
  rocket: string
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
