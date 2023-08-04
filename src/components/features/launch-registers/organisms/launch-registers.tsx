'use client'
import { FindAllLaunchesController } from '@/application/controllers/launch/find-launch-controller'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import Separator from '@/components/shared/atoms/ui-components/separator'
import { Launch } from '@/domain/models/launch'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'
import SearchForm from '../molecules/search-form'
import RegisterBox from './register-box'

const LaunchRegisters = () => {
  const [launches, setLaunches] = useState<Launch[] | string>([])
  const controller = container.resolve(FindAllLaunchesController)

  useEffect(() => {
    controller.handle().then(setLaunches)
  }, [controller])

  return (
    <SectionBox>
      <Title text="REGISTROS DE LANÇAMENTOS" />
      <Separator />
      <SearchForm />
      {typeof launches === 'string' || launches == null ? (
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
