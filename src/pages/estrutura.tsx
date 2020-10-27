import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const StructurePage = ({ images }) => {
  return (
    <Layout pageTitle="Estrutura do Clube">
      <h1>Estrutura</h1>

      <article className="flex">
        {images.map((image, index) => <img key={index} src={image} alt="Foto da estrutura" className="w-1/3" />)}
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = getPageBySlug('structure')

  return {
    props: {
      ...page,
    },
  }
}

export default StructurePage
