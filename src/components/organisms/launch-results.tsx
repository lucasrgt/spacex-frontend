import Separator from '../atoms/separator'
import Title from '../atoms/text/title'

const LaunchResults = () => {
  return (
    <div className="bg-blue-500 border-b border-b-spaceblue-500 h-64 flex flex-col items-center ">
      <Title className="mt-4" text="RESULTADO DE LANÇAMENTO" />
      <Separator />
    </div>
  )
}

export default LaunchResults
