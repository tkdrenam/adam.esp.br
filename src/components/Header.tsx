import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  contact: {
    instagram: string
    facebook: string
    twitter: string
  }
}

export const Header: React.FC<Props> = ({ title, contact }) => {
  return (
    <header className="bg-gray-900 p-6">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <Image
              src="/images/icon.png"
              width="160"
              height="160"
              alt="Logotipo Associação Duovizinhense de Artes Marciais"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="lg:flex-1 flex flex-row justify-end pb-4 lg:pb-0">
              {contact.instagram && (
                <a rel="nofollow" role="link" target="_blank" href={`https://www.instagram.com/${contact.instagram}`}>
                  <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4" />
                </a>
              )}
              {contact.facebook && (
                <a rel="nofollow" role="link" target="_blank" href={`https://www.facebook.com/${contact.facebook}`}>
                  <img src="/icons/facebook.png" alt="Facebook" className="w-4 h-4 mx-4" />
                </a>
              )}
              {contact.twitter && (
                <a rel="nofollow" role="link" target="_blank" href={`https://www.twitter.com/${contact.twitter}`}>
                  <img src="/icons/twitter.png" alt="Twitter" className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="flex-1 flex items-center">
              <nav className="flex-1">
                <ul className="flex justify-center flex-wrap lg:-mr-3">
                  <li>
                    <Link href="/">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/historia">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">O Clube</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diretoria">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Taekwondo</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Transparência</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Notícias</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Campeonatos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Social</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato">
                      <a className="text-white font-bold text-base uppercase px-2 py-6 mx-1">Contato</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden lg:flex lg:flex-1" />
          </div>
        </div>

        {title && (
          <div className="container mx-auto pt-8 pb-2">
            <h1 className="text-center font-bold text-4xl text-white uppercase">{title}</h1>
          </div>
        )}
      </div>
    </header>
  )
}
