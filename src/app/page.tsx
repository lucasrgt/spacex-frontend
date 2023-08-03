import LaunchRegisters from '@/components/features/launch-registers/organisms/launch-registers'
import LaunchResults from '@/components/features/launch-results/organisms/launch-results'
import RocketLaunches from '@/components/features/rocket-launches/organisms/rocket-launches'
import YearLaunches from '@/components/features/year-launches/organisms/year-launch-bars'

import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import Header from '@/components/shared/organisms/ui-components/header'

export default function Home() {
  return (
    <main className="bg-gradient-to-tl from-spacegray-500 to-spacegray-600 min-h-screen h-full">
      <Header />
      <LaunchResults />
      <SectionSeparator />
      <RocketLaunches />
      <SectionSeparator />
      <YearLaunches />
      <LaunchRegisters />
    </main>
  )
}
