import Link from 'next/link'

export const Header = ({ title }) => {
  return (
    <header style={{ height: 440, backgroundImage: 'url(/images/header.jpeg)' }} className="bg-blue-500 bg-center bg-cover bg-no-repeat">
      <div className="h-full flex flex-col justify-between bg-black bg-opacity-50">
        <div className="container mx-auto py-10">
          <div className="flex flex-row justify-between">
            <div />

            <div className="flex flex-row">
              <a rel="nofollow" role="link" href="https://www.instagram.com/renamrestelatto">
                <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a rel="nofollow" role="link" href="https://www.facebook.com/renamrestelatto">
                <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6 mx-4" />
              </a>
              <a rel="nofollow" role="link" href="https://www.twitter.com/renamrestelatto">
                <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto sticky top-0 z-10"> */}
        <div className="container mx-auto">
          <nav className="bg-black bg-opacity-75 h-16">
            <ul className="flex justify-between items-center h-full">
              <li className="h-full">
                <Link href="/">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">HOME</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="/historia">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">O CLUB</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="/diretoria">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">TAEKWONDO</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="#">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">TRANSPARÊNCIA</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="/blog">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">NOTÍCIAS</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="#">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">CAMPEONATOS</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="#">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">SOCIAL</a>
                </Link>
              </li>
              <li className="h-full">
                <Link href="/contato">
                  <a className="h-full flex items-center px-8 text-white font-bold text-base uppercase">CONTATO</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {title && (
          <div className="container mx-auto py-12">
            <h1 className="text-center font-bold text-4xl text-white uppercase">{title}</h1>
          </div>
        )}
      </div>
    </header>
  )
}
