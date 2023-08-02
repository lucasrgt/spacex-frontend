import classNames from 'classnames'

interface TitleProps {
  text: string
  className?: string
}

const Title = ({ text, className }: TitleProps) => {
  const extraClasses = classNames(className)

  return <h1 className={`${extraClasses} text-spaceblue-500`}>{text}</h1>
}

export default Title
