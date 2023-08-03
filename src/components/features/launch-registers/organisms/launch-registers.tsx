import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import SearchForm from '../molecules/search-form'

const LaunchRegisters = () => {
  return (
    <SectionBox>
      <Title text="REGISTROS DE LANÇAMENTOS" />
      <Separator />
      <SearchForm />
    </SectionBox>
  )
}

export default LaunchRegisters
