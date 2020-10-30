import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const StructurePage = ({ contact, structure }) => {
  return (
    <Layout title="Estrutura do Clube" contact={contact}>
      <h2>Estrutura</h2>

      <article className="flex">
        {structure.images.map((image, index) => (
          <img key={index} src={image} alt="Foto da estrutura" className="w-1/3" />
        ))}
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = getPageBySlug('contact')
  const structure = getPageBySlug('structure')

  return {
    props: {
      contact,
      structure,
    },
  }
}

export default StructurePage
