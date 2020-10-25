import { Layout } from '@/components/Layout'
import { styled } from '@/styles'
import { GetStaticProps } from 'next'

const Post = styled('article', {
  display: 'flex',

  img: {
    size: '$24'
  }
})

const HomePage = ({ posts }) => {
  return (
    <Layout pageTitle="Blog">
      <div>
        {posts.map((post, index) => {
          return (
            <Post key={index}>
              <div>
                <img src={post.thumbnail} />
              </div>

              <div>
                <h2>
                  {post.title} - {post.author}
                </h2>
                <small>{post.description}</small>
              </div>
            </Post>
          )
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const resolve = require.context('../../content/posts', true, /\.md$/)
  const posts: any = resolve.keys().map(resolve)

  return {
    props: {
      posts: posts.map((post) => post.attributes),
    },
  }
}

export default HomePage
