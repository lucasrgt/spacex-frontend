import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import LaunchResultFailureBox from '@/components/shared/molecules/launch-results/launch-result-failure-box'
import LaunchResultSuccessBox from '@/components/shared/molecules/launch-results/launch-result-success-box'

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
