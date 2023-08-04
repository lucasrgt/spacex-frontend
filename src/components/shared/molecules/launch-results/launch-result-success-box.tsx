interface LaunchResultSuccessBoxProps {
  successes: number
}

const LaunchResultSuccessBox = ({ successes }: LaunchResultSuccessBoxProps) => {
  return (
    <div className="flex flex-col items-center mb-4 bg-gradient-to-t from-green-400 p-4 rounded-xl border border-green-400 shadow-spacex shadow-green-800 blur-none ">
      <h1 className="text-white text-2xl font-bold">{successes}</h1>
      <h2 className="text-white">SUCESSO</h2>
    </div>
  )
}

export default LaunchResultSuccessBox
