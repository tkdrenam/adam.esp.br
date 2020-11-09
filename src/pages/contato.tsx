import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  contact: any
  lastTwoPosts: Post[]
}

const ContactPage: React.FC<Props> = ({ contact, lastTwoPosts }) => {
  return (
    <Layout title="Contato" contact={contact} posts={lastTwoPosts}>
      <div className="mb-8">
        <h2>Endereço</h2>
        <h3>{contact.address}</h3>
      </div>

      <div className="mb-8">
        <h2>Telefone</h2>
        <h3>{contact.phone}</h3>
      </div>

      <div className="mb-8">
        <h2>E-mail</h2>
        <h3>{contact.email}</h3>
      </div>

      <div className="mb-8">
        <h2>Facebook</h2>
        <h3>{contact.facebook}</h3>
      </div>

      <div className="mb-8">
        <h2>Instagram</h2>
        <h3>{contact.instagram}</h3>
      </div>

      <div>
        <h2>Twitter</h2>
        <h3>{contact.twitter}</h3>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')

  return {
    props: {
      lastTwoPosts,
      contact,
    },
  }
}

export default ContactPage
