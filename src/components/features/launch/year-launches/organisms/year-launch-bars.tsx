'use client'
import { FindLaunchChartDataController } from '@/application/controllers/launch/find-launch-chart-data-controller'
import Title from '@/components/shared/atoms/text/title'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import Separator from '@/components/shared/atoms/ui-components/separator'
import BarChart from '@/components/shared/organisms/charts/bar-chart/bar-chart'
import { LaunchChartData } from '@/domain/models/launch-chart-data'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

const YearLaunches = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchLaunchChartData = async () => {
    setIsLoading(true)
    const data = await container.resolve(FindLaunchChartDataController).handle()

    if (data && typeof data !== 'string') {
      const years: Record<string, Record<string, number>> = {}

      data.forEach((d: LaunchChartData) => {
        const date = new Date(d.date_utc)
        const year = date.getUTCFullYear().toString()
        let rocketType = d.rocket

        if (d.cores.some((core) => core.reused)) {
          rocketType = 'Used ' + rocketType
        } else {
          rocketType = 'New ' + rocketType
        }

        years[year] = years[year] || {}
        years[year][rocketType] = (years[year][rocketType] || 0) + 1
      })

      const labels = Object.keys(years).sort()
      const rocketTypes = Object.keys(
        data.reduce(
          (acc, launch) => {
            acc['Used ' + launch.rocket] = true
            acc['New ' + launch.rocket] = true
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
    fetchLaunchChartData()
    const intervalId = setInterval(fetchLaunchChartData, 60000)
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
