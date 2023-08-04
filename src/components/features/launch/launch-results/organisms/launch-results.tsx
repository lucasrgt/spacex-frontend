'use client'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import LaunchResultFailureBox from '@/components/shared/molecules/launch-results/launch-result-failure-box'
import LaunchResultSuccessBox from '@/components/shared/molecules/launch-results/launch-result-success-box'
import { useEffect, useState } from 'react'
import { getLaunchSuccessesAndFailures } from '../helpers/launch-count-successes-and-failures'

const LaunchResults = () => {
  const [results, setResults] = useState({ successes: 0, failures: 0 })

  useEffect(() => {
    const fetchResults = async () => {
      const data = await getLaunchSuccessesAndFailures()
      setResults(data)
    }

    fetchResults()

    const intervalId = setInterval(() => {
      fetchResults()
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const { successes, failures } = results

  return (
    <SectionBox>
      <Title text="RESULTADO DE LANÇAMENTO" />
      <Separator />
      <div className="grid grid-cols-2 gap-4 ">
        <LaunchResultSuccessBox successes={successes} />
        <LaunchResultFailureBox failures={failures} />
      </div>
    </SectionBox>
  )
}

export default LaunchResults
