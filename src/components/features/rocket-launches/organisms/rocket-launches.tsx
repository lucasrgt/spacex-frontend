'use client'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import PieChart from '@/components/shared/organisms/charts/pie-chart/pie-chart'
import { useState } from 'react'
import { RocketLaunchData } from './data'

const RocketLaunches = () => {
  const [chartData, setChartData] = useState({
    labels: RocketLaunchData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: RocketLaunchData.map((data) => data.userGain),
        backgroundColor: ['#7AE7FF', '#8D7AFF', '#FFD27A']
      }
    ],
    type: 'bar'
  })

  return (
    <SectionBox>
      <Title text="LANÇAMENTOS DE FOGUETES" />
      <Separator />
      <PieChart chartData={chartData} />
    </SectionBox>
  )
}

export default RocketLaunches
