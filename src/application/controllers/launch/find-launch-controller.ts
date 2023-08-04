import { Controller } from '@/application/protocols/controller'
import type { FindLaunchesRepository } from '@/data/repositories/launch/find-launch-repository'
import { Launch } from '@/domain/models/launch'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllLaunchesController implements Controller {
  constructor(
    @inject('FindLaunchesRepository')
    private readonly findLaunchesRepository: FindLaunchesRepository
  ) {}

  async handle(): Promise<Launch[] | string> {
    try {
      const launches = await this.findLaunchesRepository.findAll()
      return launches
    } catch (error) {
      return 'No launch was found.'
    }
  }
}
