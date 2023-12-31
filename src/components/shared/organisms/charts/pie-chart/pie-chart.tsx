'use client'
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { options } from './chart-options'

Chart.register(Legend, ArcElement, Tooltip)

const PieChart = ({ chartData }: any) => {
  // @ts-ignore
  return <Pie options={options} data={chartData} />
}

export default PieChart
