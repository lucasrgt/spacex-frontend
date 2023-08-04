'use client'
import { FindAllLaunchesController } from '@/application/controllers/launch/find-launch-controller'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import BarChart from '@/components/shared/organisms/charts/bar-chart/bar-chart'
import { Launch } from '@/domain/models/launch'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

const YearLaunches = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchLaunches = async () => {
    setIsLoading(true)
    const launches = await container.resolve(FindAllLaunchesController).handle()

    if (launches && typeof launches !== 'string') {
      const years: Record<string, Record<string, number>> = {}

      launches.forEach((launch: Launch) => {
        const date = new Date(launch.date_utc)
        const year = date.getUTCFullYear().toString()
        const usedRocket = launch.cores.some((core) => core.reused)
        const rocket = `${usedRocket ? 'Used' : 'New'} ${launch.rocket}`

        years[year] = years[year] || {}
        years[year][rocket] = (years[year][rocket] || 0) + 1
      })

      const labels = Object.keys(years).sort()
      const rocketTypes = Object.keys(
        launches.reduce(
          (acc, launch) => {
            const usedRocket = launch.cores.some((core) => core.reused)
            acc[`${usedRocket ? 'Used' : 'New'} ${launch.rocket}`] = true
            return acc
          },
          {} as Record<string, boolean>
        )
      )

      const datasets = rocketTypes.map((rocket, i) => {
        const hue = (360 / rocketTypes.length) * i
        return {
          label: rocket,
          data: labels.map((year) => years[year][rocket] || 0),
          backgroundColor: `hsl(${hue}, 70%, 70%)`
        }
      })

      setChartData({
        labels,
        datasets,
        type: 'bar'
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchLaunches()
    const intervalId = setInterval(fetchLaunches, 60000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <SectionBox className="w-full">
      <Title text="LANÇAMENTOS POR ANO" />
      <Separator />
      <div className="w-full h-full lg:w-3/4 p-4 flex justify-center">
        {isLoading ? (
          <div className="loading text-spaceblue-500">Carregando...</div>
        ) : (
          <BarChart className="h-full w-full" chartData={chartData} />
        )}
      </div>
    </SectionBox>
  )
}

export default YearLaunches
