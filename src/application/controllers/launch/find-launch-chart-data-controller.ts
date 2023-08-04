import { Controller } from '@/application/protocols/controller'
import type { FindLaunchChartDataRepository } from '@/data/repositories/launch/find-launch-chart-data-repository'
import { LaunchChartData } from '@/domain/models/launch-chart-data'

import { inject, injectable } from 'tsyringe'

@injectable()
export class FindLaunchChartDataController implements Controller {
  constructor(
    @inject('FindLaunchChartDataRepository')
    private readonly findLaunchChartDataRepository: FindLaunchChartDataRepository
  ) {}

  async handle(): Promise<LaunchChartData[] | string> {
    try {
      const chartData = await this.findLaunchChartDataRepository.findAll()
      return chartData
    } catch (error) {
      return 'No data was found.'
    }
  }
}
