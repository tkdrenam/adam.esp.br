import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { getPageBySlug } from '@/lib/pages'

const PostPage = ({ contact, post }) => {
  if (!post) return <></>

  return (
    <Layout title={post.title} contact={contact}>
      <Link href="/blog">
        <a className="text-blue-500 underline">Back to blog</a>
      </Link>

      <article>
        <h2 className="font-bold text-xl">{post.title}</h2>

        <p className="text-sm text-gray-500 mb-2">
          Por {post.author} | {post.date.split('-').reverse().join('/')}
        </p>

        <div>
          {post.tags.map((tag) => (
            <small className="text-white bg-gray-700 p-1 mr-1">{tag}</small>
          ))}
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
  const contact = getPageBySlug('contact')
  const post = getPostBySlug(params.slug as string)

  return {
    props: {
      contact,
      post,
    },
  }
}

export default PostPage
