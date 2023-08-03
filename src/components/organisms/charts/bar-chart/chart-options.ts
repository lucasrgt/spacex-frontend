import { ChartOptions } from 'chart.js/auto'

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      position: 'nearest'
    }
  },
  scales: {
    x: {
      type: 'category',
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        color: '#99F3FF',
        padding: 8,
        font: {
          family: 'monospace',
          size: 12
        }
      }
    },
    y: {
      type: 'linear',
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        color: '#99F3FF',
        padding: 8,
        font: {
          family: 'monospace',
          size: 12
        }
      }
    }
  }
}
