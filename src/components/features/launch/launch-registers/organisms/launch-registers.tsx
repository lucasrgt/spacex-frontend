'use client'
import { FindAllLaunchesController } from '@/application/controllers/launch/find-all-launches-controller'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import Separator from '@/components/shared/atoms/ui-components/separator'

import { PaginatedLaunch } from '@/domain/models/paginated-launch-chart-data'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'
import SearchForm from '../molecules/search-form'
import RegisterBox from './register-box'

const LaunchRegisters = () => {
  const [launches, setLaunches] = useState<PaginatedLaunch | null>(null)

  const fetchLaunches = async () => {
    const launches = await container.resolve(FindAllLaunchesController).handle()
    if (typeof launches === 'string' || launches == null) {
      setLaunches(null)
      return
    }
    setLaunches(launches)
  }

  useEffect(() => {
    fetchLaunches()
  }, [])

  return (
    <SectionBox>
      <Title text="REGISTROS DE LANÇAMENTOS" />
      <Separator />
      <SearchForm />
      {!launches ? (
        <h1 className="text-spaceblue-500">
          Nenhum lançamento foi encontrado.
        </h1>
      ) : (
        <RegisterBox data={launches} />
      )}
      <SectionSeparator />
    </SectionBox>
  )
}

export default LaunchRegisters
