'use client'

import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import BarChart from '@/components/shared/organisms/charts/bar-chart/bar-chart'
import { useState } from 'react'
import { LaunchData } from './data'

const YearLaunches = () => {
  const [chartData, setChartData] = useState({
    labels: LaunchData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: LaunchData.map((data) => data.userGain),
        backgroundColor: '#7AE7FF',
        borderRadius: 8
      },
      {
        label: 'Brioche',
        data: LaunchData.map((data) => data.userGain),
        backgroundColor: '#80B2FE',
        borderRadius: 8
      },
      {
        label: 'Users Gained',
        data: LaunchData.map((data) => data.userGain),
        backgroundColor: '#6587FF',
        borderRadius: 8
      }
    ],
    type: 'bar'
  })

  return (
    <SectionBox className="w-full">
      <Title text="LANÇAMENTOS POR ANO" />
      <Separator />
      <div className="w-full h-full lg:w-3/4 p-4 flex justify-center">
        <BarChart className="h-full w-full" chartData={chartData} />
      </div>
    </SectionBox>
  )
}

export default YearLaunches
