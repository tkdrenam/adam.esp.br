import { Layout } from '@/components/Layout'
import { attributes, react as HomeContent } from '../../content/home.md'

const HomePage = () => {
  const { title, cats } = attributes

  return (
    <Layout pageTitle={title}>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

export default HomePage
