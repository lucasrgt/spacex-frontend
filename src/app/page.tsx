import Header from '@/components/organisms/header'
import LaunchResults from '@/components/organisms/launch-results'

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-tl from-spacegray-500 to-spacegray-600">
      <Header />
      <LaunchResults />
    </main>
  )
}
