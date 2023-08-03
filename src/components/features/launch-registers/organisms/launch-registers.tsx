import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import Separator from '@/components/shared/atoms/ui-components/separator'
import SearchForm from '../molecules/search-form'
import RegisterBox from './register-box'

const LaunchRegisters = () => {
  return (
    <SectionBox>
      <Title text="REGISTROS DE LANÇAMENTOS" />
      <Separator />
      <SearchForm />
      <RegisterBox />
      <SectionSeparator />
    </SectionBox>
  )
}

export default LaunchRegisters
