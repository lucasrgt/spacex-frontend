import SectionBox from '@/components/shared/atoms/ui-components/section-box'
import SectionSeparator from '@/components/shared/atoms/ui-components/section-separator'
import classNames from 'classnames'
import IdentifierBox from '../molecules/identifier-box'
import Paginator from '../molecules/paginator'

interface RegisterBoxProps {
  className?: string
}

const RegisterBox = ({ className }: RegisterBoxProps) => {
  return (
    <div className="flex flex-col w-full items-center">
      <SectionBox
        className={`${classNames(
          className
        )} !p-0 !m-0 h-full w-full flex !flex-row justify-between !items-start`}
      >
        <IdentifierBox className="w-1/3" isSuccess={false} logoUrl={''} />
        <div className="p-4 !h-full w-2/3 border-l border-spaceblue-500">
          <DataPiece
            title={'MISSÃO'}
            data={['STARLINK 4SSSSSSSSSSSSSSSSSSSSSSSS']}
          />
          <DataPiece title={'FOGUETE'} data={['USED FALCON 9']} />
          <DataPiece title={'DATA'} data={['05/10/2022']} />
          <SectionSeparator />
        </div>
      </SectionBox>
      <Paginator />
    </div>
  )
}

interface DataPieceProps {
  title: string
  data: string[]
}

const DataPiece = ({ title, data }: DataPieceProps) => {
  return (
    <div className="mb-4 flex flex-col flex-wrap break-all">
      <h1 className="text-spaceblue-500">{title}</h1>
      <h1 className="text-white">{data}</h1>
    </div>
  )
}

export default RegisterBox
