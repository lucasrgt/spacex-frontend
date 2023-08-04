import { FindAllLaunchesController } from '@/application/controllers/launch/find-launch-controller'
import { Launch } from '@/domain/models/launch'
import { useEffect, useState } from 'react'
import { container } from 'tsyringe'

export const useGetLaunches = (): Launch[] => {
  const [launches, setLaunches] = useState<Launch[] | string>([])
  const controller = container.resolve(FindAllLaunchesController)

  useEffect(() => {
    controller.handle().then(setLaunches)
  }, [controller])

  if (typeof launches === 'string' || launches == null) {
    throw new Error()
  }

  return launches
}
