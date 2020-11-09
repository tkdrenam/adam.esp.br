import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  posts: Post[]
  contact: any
  lastTwoPosts: Post[]
}

const BlogPage: React.FC<Props> = ({ contact, lastTwoPosts, posts }) => {
  return (
    <Layout title="Notícias" contact={contact} posts={lastTwoPosts}>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a>
              <div className="flex items-start">
                <div className="pr-4">
                  <Image src={post.thumbnail} width="200" height="200" />
                </div>

                <div className="flex-1">
                  <h2 className="mt-0">
                    {post.title} - {post.author}
                  </h2>

                  <small>{post.description}</small>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const posts = getPosts()

  return {
    props: {
      lastTwoPosts,
      contact,
      posts,
    },
  }
}

export default BlogPage
