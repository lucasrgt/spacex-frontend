import classNames from 'classnames'

interface SeparatorProps {
  className?: string
}

const Separator = ({ className }: SeparatorProps) => {
  const extraClasses = classNames(className)

  return (
    <div
      className={`${extraClasses} h-[1px] w-16 my-4  bg-spaceblue-500`}
    ></div>
  )
}

export default Separator
