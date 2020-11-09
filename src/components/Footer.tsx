import Link from 'next/link'
import { Post } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

type Props = {
  contact: {
    phone: string
    address: string
    facebook: string
  }
  posts: Post[]
}

export const Footer: React.FC<Props> = ({ posts = [], contact }) => {
  const [firstPost, secondPost] = posts

  return (
    <>
      <footer className="bg-red-600 text-white py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:-mx-2 md:flex-row">
            <div className="w-full md:w-4/12 md:px-2">
              <h5 className="font-bold text-lg uppercase mb-8">Sobre Nós</h5>
              <div className="mb-8">
                <strong>Endereço: </strong>
                {contact.address}
              </div>
              <div>
                <strong>Telefone: </strong>
                {contact.phone}
              </div>
            </div>

            <div className="w-full md:w-4/12 md:px-2">
              <h5 className="font-bold text-lg uppercase mb-8">Últimas Notícias</h5>

              <div>
                {firstPost && (
                  <Link href={`/blog/${firstPost.slug}`}>
                    <a className="block mb-6">
                      <p className="font-bold leading-none">{firstPost.title}</p>
                      <span className="text-xs">{formatDate(firstPost.date)}</span>
                    </a>
                  </Link>
                )}

                {secondPost && (
                  <Link href={`/blog/${secondPost.slug}`}>
                    <a className="block mb-6">
                      <p className="font-bold leading-none">{secondPost.title}</p>
                      <span className="text-xs">{formatDate(secondPost.date)}</span>
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-full md:w-4/12 md:px-2">
              <h5 className="font-bold text-lg uppercase mb-8">Curta</h5>

              <div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frenamrestelatto%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=578586372269420"
                  width="100%"
                  height="130px"
                  scrolling="no"
                  frameBorder={0}
                  allowTransparency
                  allow="encrypted-media"
                  className="border-0 overflow-hidden"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          <p className="text-sm text-center">
            © Copyright 2020 Todos os direitos reservados a Associação Duovizinhense de Artes Marciais
          </p>
        </div>
      </div>
    </>
  )
}
