import SectionSeparator from '@/components/atoms/ui-components/section-separator'
import LaunchBars from '@/components/organisms/launch-bars/launch-bars'
import LaunchResults from '@/components/organisms/launch-results/launch-results'
import Header from '@/components/organisms/ui-components/header'

export default function Home() {
  return (
    <main>
      <Header />
      <LaunchResults />
      <SectionSeparator />
      <LaunchBars />
    </main>
  )
}
