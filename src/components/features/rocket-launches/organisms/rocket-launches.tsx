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
        backgroundColor: ['#7AE7FF', '#8D7AFF', '#99F3FF']
      }
    ],
    type: 'pie'
  })

  return (
    <SectionBox>
      <Title text="LANÇAMENTOS DE FOGUETES" />
      <Separator />
      <div className="w-full h-full lg:w-3/4 p-4">
        <PieChart className="h-full w-full" chartData={chartData} />
      </div>
    </SectionBox>
  )
}

export default RocketLaunches
