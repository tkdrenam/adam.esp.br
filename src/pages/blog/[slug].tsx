import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPostBySlug, getPosts } from '@/lib/posts'

const PostPage = ({ post }) => {
  if (!post) return <></>

  return (
    <Layout pageTitle={post.title}>
      <Link href="/blog">
        <a className="text-blue-500 underline">Back to blog</a>
      </Link>

      <article>
        <h1 className="font-bold text-xl">{post.title}</h1>

        <p className="text-sm text-gray-500 mb-2">Por {post.author} | {post.date.split('-').reverse().join('/')}</p>

        <div>
          {post.tags.map((tag) => <small className="text-white bg-gray-700 p-1 mr-1">{tag}</small>)}
        </div>

        <div>
          <ReactMarkdown source={post.body} />
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts()
  const paths = posts.map(({ slug }) => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const post = getPostBySlug(slug as string)

  return {
    props: {
      post
    },
  }
}

export default PostPage
