import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Post } from '@/lib/posts'

type Props = {
  title: string
  contact: {
    email: string
    phone: string
    address: string
    instagram: string
    facebook: string
    twitter: string
  },
  posts: Post[]
}

export const Layout: React.FC<Props> = ({ children, posts, contact, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content="Associação Duovizinhense de Artes Marciais" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header title={title} contact={contact} />

      <main className="container mx-auto py-16">{children}</main>

      <Footer posts={posts} contact={contact} />
    </>
  )
}
