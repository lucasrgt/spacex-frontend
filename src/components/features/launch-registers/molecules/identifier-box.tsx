import classNames from 'classnames'

interface IdentifierBoxProps {
  isSuccess: boolean
  logoUrl: string
  className?: string
}

const IdentifierBox = ({
  isSuccess,
  logoUrl,
  className
}: IdentifierBoxProps) => {
  return (
    <div
      className={`${classNames(
        className
      )}  flex h-full flex-col items-center text-center border-b border-spaceblue-500`}
    >
      <div className="h-full w-full">
        {isSuccess ? (
          <div className="bg-gradient-to-b from-green-400  w-full px-4 py-2 flex justify-center items-center border-b border-spaceblue-500 text-white">
            SUCESSO
          </div>
        ) : (
          <div className="bg-gradient-to-b from-red-400  w-full px-4 py-2 !m-0 flex justify-center items-center border-b border-spaceblue-500 text-white">
            FALHA
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center !self-center items-center h-full p-4">
        <h1 className="mb-4 text-white">LOGO AQUI</h1>
        <h1 className="text-spaceblue-500 text-2xl">180</h1>
      </div>
    </div>
  )
}

export default IdentifierBox
