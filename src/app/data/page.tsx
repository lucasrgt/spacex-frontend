'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { fetchLaunches } from '@/state/redux/slice/launch-slice'
import { useEffect, useState } from 'react'

export default function Data() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.launchReducer.data)
  const [dataPresent, setDataPresent] = useState<boolean>(false)

  useEffect(() => {
    if (!dataPresent) {
      dispatch(fetchLaunches())
      setDataPresent(true)
      console.log(process.env.NEXT_PUBLIC_SERVER_URL)
    }
  }, [dataPresent, dispatch])

  const renderedData = data?.map((launch) => (
    <li key={launch.id}>{launch.name}</li>
  ))

  return <div>{renderedData}</div>
}
