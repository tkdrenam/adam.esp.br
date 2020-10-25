import Head from 'next/head'
import { Header } from '@/components/Header'

export const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  )
}
