import { Controller } from '@/application/protocols/controller'
import type { FindLaunchResultsRepository } from '@/data/repositories/launch/find-launch-results'
import { LaunchResults } from '@/domain/models/launch-results'

import { inject, injectable } from 'tsyringe'

@injectable()
export class FindLaunchResultsController implements Controller {
  constructor(
    @inject('FindLaunchResultsRepository')
    private readonly findLaunchResultsRepository: FindLaunchResultsRepository
  ) {}

  async handle(): Promise<LaunchResults[] | any> {
    try {
      const Results = await this.findLaunchResultsRepository.findAll()
      return Results
    } catch (error) {
      return 'No data was found.'
    }
  }
}
