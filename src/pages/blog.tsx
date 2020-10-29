import Link from 'next/link'
import Image from 'next/image'
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
                  <div className="pr-4">
                    <Image src={post.thumbnail} width="200" height="200" />
                  </div>

                  <div className="flex-1">
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
