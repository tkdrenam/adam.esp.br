import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  structure: any
  contact: any
  lastTwoPosts: Post[]
}

const StructurePage: React.FC<Props> = ({ contact, lastTwoPosts, structure }) => {
  return (
    <Layout title={structure.title} contact={contact} posts={lastTwoPosts}>
      <article className="flex flex-col">
        {structure.images.map((image, index) => (
          <img key={index} src={image} alt="Foto da estrutura" />
        ))}
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const structure = getPageBySlug('structure')

  return {
    props: {
      lastTwoPosts,
      contact,
      structure,
    },
  }
}

export default StructurePage
