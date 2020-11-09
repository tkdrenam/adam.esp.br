import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from '@/components/NavLink'
import { NavDropdown } from '@/components/NavDropdown'

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
      <div className="md:container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <Image
                  src="/images/icon.png"
                  width="160"
                  height="160"
                  alt="Logotipo Associação Duovizinhense de Artes Marciais"
                />
              </a>
            </Link>
          </div>

          <div className="flex flex-col justify-between">
            <div className="lg:flex-1 flex flex-row justify-end -mx-2 pb-4 lg:pb-0">
              {contact.instagram && (
                <a
                  rel="noreferrer"
                  role="link"
                  target="_blank"
                  href={`https://www.instagram.com/${contact.instagram}`}
                  className="mx-2"
                >
                  <Image width="16" height="16" src="/icons/instagram.png" alt="Instagram" />
                </a>
              )}
              {contact.facebook && (
                <a
                  rel="noreferrer"
                  role="link"
                  target="_blank"
                  href={`https://www.facebook.com/${contact.facebook}`}
                  className="mx-2"
                >
                  <Image width="16" height="16" src="/icons/facebook.png" alt="Facebook" className="mx-4" />
                </a>
              )}
              {contact.twitter && (
                <a
                  rel="noreferrer"
                  role="link"
                  target="_blank"
                  href={`https://www.twitter.com/${contact.twitter}`}
                  className="mx-2"
                >
                  <Image width="16" height="16" src="/icons/twitter.png" alt="Twitter" />
                </a>
              )}
            </div>

            <div className="flex-1 flex items-center">
              <nav className="flex-1">
                <ul className="flex justify-center flex-wrap lg:-mr-3">
                  <li>
                    <NavLink label="Home" href="/" />
                  </li>
                  <li>
                    <NavDropdown label="O Clube" menus={[
                      { href: '/historia', label: 'História' },
                      { href: '/titulos', label: 'Títulos' },
                      { href: '/estrutura', label: 'Estrutura' },
                      { href: '/diretoria', label: 'Diretoria' },
                    ]} />
                  </li>
                  <li>
                    <NavDropdown label="Modalidades" menus={[
                      { href: '/muaythai', label: 'Muaythai' },
                      { href: '/mma', label: 'MMA' },
                      { href: '/jiujitsu', label: 'Jiujitsu' },
                      { href: '/kickboxing', label: 'Kickboxing' },
                      { href: '/hapkido', label: 'Hapkido' },
                      { href: '/taekwondo', label: 'Taekwondo' },
                    ]} />
                  </li>
                  <li>
                    <NavDropdown label="Transparência" menus={[
                      { href: '/atendimento', label: 'Atendimento' },
                      { href: '/diretoria-executiva', label: 'Diretoria Executiva' },
                      { href: '/financeiro', label: 'financeiro' },
                      { href: '/execucao-de-projetos', label: 'Execução de Projetos' },
                      { href: '/compras', label: 'Compras' },
                      { href: '/assembleias', label: 'Assembleias' },
                      { href: '/governanca', label: 'Governança' },
                      { href: '/faq', label: 'Perguntas e Respostas Frequentes' },
                      { href: '/relatorio-de-gestao-e-execucao-orcamentaria', label: 'Relatório de Gestão e Execução Orçamentária' },
                      { href: '/legislacao-portarias-resolucoes', label: 'Legislação, Portarias e Resoluções' },
                      { href: '/edital', label: 'Edital' },
                    ]} />
                  </li>
                  <li>
                    <NavLink label="Notícias" href="/blog" />
                  </li>
                  <li>
                    <NavLink label="Contato" href="/contato" />
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden lg:flex lg:flex-1" />
          </div>
        </div>

        {title && (
          <div className="md:container mx-auto pt-8 pb-2">
            <h1 className="text-center font-bold text-4xl text-white uppercase">{title}</h1>
          </div>
        )}
      </div>
    </header>
  )
}
