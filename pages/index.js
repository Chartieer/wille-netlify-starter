import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { fetchEntries } from '../utils/contentfulPosts'
import Post from '../components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Mongos sda s dsd </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="posts">
          {posts.map((p) => {
            console.log(p.date)
            return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}