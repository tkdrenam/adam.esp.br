import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPosts } from '@/lib/posts'

const HomePage = ({ posts }) => {
  return (
    <Layout pageTitle="Blog">
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index} className="flex">
              <div>
                <img src={post.thumbnail} className="w-16 h-16" />
              </div>

              <div>
                <h2>
                  {post.title} - {post.author}
                </h2>
                <small>{post.description}</small>
              </div>
            </div>
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
