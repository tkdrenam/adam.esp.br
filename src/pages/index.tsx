import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/Layout'
import { SectionTitle } from '@/components/SectionTitle'
import { getTags, Tag } from '@/lib/tags'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

type Props = {
  home: any
  contact: any
  lastTwoPosts: Post[]
  tags: Tag[]
  posts: Post[]
}

const HomePage: React.FC<Props> = ({ contact, lastTwoPosts, home, tags = [], posts = [] }) => {
  const [lastPost, ...otherPosts] = posts

  return (
    <Layout title={home.title} contact={contact} posts={lastTwoPosts}>
      <Link href={`/blog/${lastPost.slug}`}>
        <a>
          <article className="relative">
            <Image src={lastPost.thumbnail} alt={lastPost.title} width="1280" height="400" className="object-cover" />
            <div className="absolute bottom-0 p-6 bg-black bg-opacity-25">
              <h2 className="text-white">{lastPost.title}</h2>
              <h3 className="text-white">{lastPost.description}</h3>
            </div>
          </article>
        </a>
      </Link>

      <div className="flex flex-col -mx-4 md:flex-row">
        <div className="w-full px-4 md:w-2/3">
          <section className="mt-10">
            <SectionTitle>Notícias Recentes</SectionTitle>

            <div className="flex flex-col -mx-4 md:flex-row md:flex-wrap">
              {otherPosts.map((post, index) => {
                return (
                  <div key={index} className="w-full px-4 pb-8 md:w-1/2">
                    <Link href={`/blog/${post.slug}`}>
                      <a>
                        <article className="flex flex-col">
                          <div className="relative w-full" style={{ height: 168 }}>
                            <Image
                              src={post.thumbnail}
                              alt={post.title}
                              // width="350"
                              // height="168"
                              layout="fill"
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-bold upptercase mt-4">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Por {post.author} | {formatDate(post.date)}
                          </p>
                          <p className="text-gray-600 mb-2">{post.description.slice(0, 100)}...</p>
                          <span className="text-red-600 font-bold text-sm">Leia Mais</span>
                        </article>
                      </a>
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        <aside className="w-full px-4 md:w-1/3">
          <div className="mt-10">
            <SectionTitle>Tags</SectionTitle>

            <div className="flex flex-wrap -mx-1">
              {tags.map((tag, index) => {
                return (
                  <div key={index} className="bg-red-600 text-white mx-1 mb-1 py-1 px-2">
                    {tag.name}
                  </div>
                )
              })}
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const home = getPageBySlug('home')
  const tags = getTags()
  const posts = getPosts().splice(0, 7)

  return {
    props: {
      lastTwoPosts,
      contact,
      home,
      tags,
      posts,
    },
  }
}

export default HomePage
