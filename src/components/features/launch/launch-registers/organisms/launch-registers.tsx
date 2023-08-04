'use client'

import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import Separator from '@/components/shared/atoms/ui-components/separator'
import SearchForm from '../molecules/search-form'

const LaunchRegisters = () => {
  return (
    <SectionBox>
      <Title text="REGISTROS DE LANÇAMENTOS" />
      <Separator />
      <SearchForm />
      {/* {null == null ? (
        <h1 className="text-spaceblue-500">
          Nenhum lançamento foi encontrado.
        </h1>
      ) : (
        <RegisterBox data={[]} />
      )} */}
      <SectionSeparator />
    </SectionBox>
  )
}

export default LaunchRegisters
