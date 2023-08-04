'use client'
import { FindLaunchChartDataController } from '@/application/controllers/launch/find-launch-chart-data-controller'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import PieChart from '@/components/shared/organisms/charts/pie-chart/pie-chart'
import { LaunchChartData } from '@/domain/models/launch-chart-data'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

const RocketLaunches = () => {
  const [chartLaunches, setChartLaunches] = useState<LaunchChartData[]>([])
  const [chartData, setChartData] = useState<any>(null)

  const fetchLaunches = async () => {
    const data = await container.resolve(FindLaunchChartDataController).handle()
    if (typeof data === 'string' || data == null) {
      setChartLaunches([])
      return
    }
    setChartLaunches(data)

    const rocketCount: Record<string, number> = {}
    data.forEach((d: LaunchChartData) => {
      const usedRocket = d.cores.some((core) => core.reused)
      const rocketType = `${usedRocket ? 'Used' : 'New'} ${d.rocket}`
      rocketCount[rocketType] = (rocketCount[rocketType] || 0) + 1
    })

    const rocketTypes = Object.keys(rocketCount)
    const backgroundColor = rocketTypes.map((_, i) => {
      const hue = (360 / rocketTypes.length) * i
      return `hsl(${hue}, 70%, 70%)`
    })

    setChartData({
      labels: rocketTypes,
      datasets: [
        {
          label: ' Vôos',
          data: Object.values(rocketCount),
          backgroundColor
        }
      ],
      type: 'pie'
    })
  }

  useEffect(() => {
    fetchLaunches()
    const intervalId = setInterval(fetchLaunches, 60000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <SectionBox className="md:border-r border-spaceblue-500">
      <Title text="LANÇAMENTOS DE FOGUETES" />
      <Separator />
      <div className="w-full h-full md:w-1/2 p-4 flex justify-center">
        {chartData === null ? (
          <h1 className="text-spaceblue-500">
            Nenhum lançamento foi encontrado
          </h1>
        ) : (
          <PieChart className="h-full w-full" chartData={chartData} />
        )}
      </div>
    </SectionBox>
  )
}

export default RocketLaunches
