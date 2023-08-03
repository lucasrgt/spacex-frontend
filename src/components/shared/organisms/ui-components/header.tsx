import Image from 'next/image'

const Header = () => {
  return (
    <header className="h-32 flex items-center justify-center border-b border-spaceblue-500">
      <Image
        src={'/img/spacex-api-logo.png'}
        alt="Logo SpaceX API"
        height={256}
        width={256}
      />
    </header>
  )
}

export default Header
