import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPosts } from '@/lib/posts'

const HomePage = ({ posts }) => {
  return (
    <Layout pageTitle="Notícias">
      <div>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a>
                <div className="flex items-start">
                  <div className="mr-4">
                    <img src={post.thumbnail} className="w-24 h-24" />
                  </div>

                  <div>
                    <h2 className="mt-0">{post.title} - {post.author}</h2>
                    <small>{post.description}</small>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts()

  return {
    props: {
      posts
      // posts: posts.map((post) => post.attributes),
    },
  }
}

export default HomePage
