'use client'
import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import { Launch } from '@/domain/models/launch'
import classNames from 'classnames'
import { format, parseISO } from 'date-fns'
import { VscTriangleRight } from 'react-icons/vsc'
import IdentifierBox from '../molecules/identifier-box'
import Paginator from '../molecules/paginator'

interface RegisterBoxProps {
  className?: string
  data: Launch[]
}

const RegisterBox = ({ className, data }: RegisterBoxProps) => {
  const usedRocket = data?.some((launch) =>
    launch.cores.some((core) => core.reused)
  )

  return (
    <div className="h-full flex flex-col w-full items-center ">
      {data?.map((launch, index) => (
        <>
          <SectionBox
            key={index}
            className={`${classNames(
              className
            )} !p-0 !m-0 h-full w-full flex flex-col justify-center !items-center`}
          >
            {
              <IdentifierBox
                className="!h-full !p-0 w-full"
                isSuccess={launch.success!}
                logoUrl={
                  launch.links?.patch?.large ? launch.links?.patch?.large : ''
                }
                flightNumber={launch.flight_number}
              />
            }
            <div className="p-4 !h-full w-full flex flex-col items-center text-center border-spaceblue-500">
              <DataPiece title={'MISSÃO'} data={launch.name} />
              <DataPiece
                title={'FOGUETE'}
                data={
                  launch.rocket
                    ? `${usedRocket ? 'New' : 'Used'} ${launch.rocket!}`
                    : 'Nenhum foguete encontrado'
                }
              />
              <DataPiece
                title={'DATA'}
                data={format(parseISO(launch.date_local), 'dd/MM/yyyy')}
              />
              {launch.links?.youtube_id ? (
                <YoutubeButton videoId={launch.links.youtube_id} />
              ) : null}
            </div>
          </SectionBox>
          <SectionSeparator />
        </>
      ))}
      <Paginator />
    </div>
  )
}

interface DataPieceProps {
  title: string
  data: string
}

const DataPiece = ({ title, data }: DataPieceProps) => {
  return (
    <div className="mb-4 flex flex-col flex-wrap break-all">
      <h1 className="text-spaceblue-500">{title}</h1>
      <h1 className="text-white">{data}</h1>
    </div>
  )
}

interface YoutubeButtonProps {
  videoId: string
}

const YoutubeButton = ({ videoId }: YoutubeButtonProps) => {
  return (
    <div className="mb-4 flex flex-col items-center">
      <h1 className="text-spaceblue-500 mb-1">ASSISTIR NO YOUTUBE</h1>

      <a
        href={`https://youtube.com/watch?v=${videoId}`}
        className="flex justify-center items-center w-8 h-8 bg-red-500 rounded-lg"
      >
        <VscTriangleRight color={'white'} />
      </a>
    </div>
  )
}

export default RegisterBox
