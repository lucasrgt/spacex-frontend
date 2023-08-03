const Paginator = () => {
  return (
    <div className="flex justify-center items-center w-full my-8">
      <PaginatorButton text={'<'} />
      <h1 className="text-white text-2xl lg:text-3xl">2/4</h1>
      <PaginatorButton text={'>'} />
    </div>
  )
}

interface PaginatorButtonProps {
  text: string
}

const PaginatorButton = ({ text }: PaginatorButtonProps) => {
  return (
    <button className="flex justify-center items-center p-4 py-2 mx-4 rounded-md bg-gradient-to-t border border-spaceblue-500 from-spaceblue-500 shadow-spacex-sm shadow-spacegray-500 text-white font-extrabold">
      {text}
    </button>
  )
}

export default Paginator
