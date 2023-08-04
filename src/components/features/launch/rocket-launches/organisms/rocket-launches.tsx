'use client'
import { FindAllLaunchesController } from '@/application/controllers/launch/find-launch-controller'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import PieChart from '@/components/shared/organisms/charts/pie-chart/pie-chart'
import { Launch } from '@/domain/models/launch'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

const RocketLaunches = () => {
  const [chartLaunches, setChartLaunches] = useState<Launch[]>([])
  const [chartData, setChartData] = useState<any>(null)

  const fetchLaunches = async () => {
    const launches = await container.resolve(FindAllLaunchesController).handle()
    if (typeof launches === 'string' || launches == null) {
      setChartLaunches([])
      return
    }
    setChartLaunches(launches)

    const rocketCount: Record<string, number> = {}
    launches.forEach((launch: Launch) => {
      const usedRocket = launch.cores.some((core) => core.reused)
      const rocketType = `${usedRocket ? 'Used' : 'New'} ${launch.rocket}`
      rocketCount[rocketType] = (rocketCount[rocketType] || 0) + 1
    })

    setChartData({
      labels: Object.keys(rocketCount),
      datasets: [
        {
          label: ' Vôos',
          data: Object.values(rocketCount),
          backgroundColor: ['#7AE7FF', '#8D7AFF', '#99F3FF']
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
    <SectionBox>
      <Title text="LANÇAMENTOS DE FOGUETES" />
      <Separator />
      <div className="w-full h-full md:w-1/3 lg:w-2/5 p-4 flex justify-center">
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
