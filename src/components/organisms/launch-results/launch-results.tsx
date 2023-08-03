import Separator from '@/components/atoms/ui-components/separator'
import Title from '../../atoms/text/title'
import SectionBox from '../../atoms/ui-components/section-box'
import LaunchResultFailureBox from '../../molecules/launch-results/launch-result-failure-box'
import LaunchResultSuccessBox from '../../molecules/launch-results/launch-result-success-box'

const LaunchResults = () => {
  return (
    <SectionBox>
      <Title text="RESULTADO DE LANÇAMENTO" />
      <Separator />
      <div className="grid grid-cols-2 gap-4 ">
        <LaunchResultSuccessBox />
        <LaunchResultFailureBox />
      </div>
    </SectionBox>
  )
}

export default LaunchResults
