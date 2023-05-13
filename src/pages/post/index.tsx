import { PostList } from '@/components/content'

import { EmptyResult } from '@/UI/common'
import { Searchbar } from '@/UI/inputs'
import { Hero, LayoutPage } from '@/UI/templates'
import type { LayoutPageProps } from '@/UI/templates'

import { getContents } from '@/services'

import { SECRET_KEY, isDev, isProd } from '@/libs/constants/environmentState'
import { generateOgImage, getMetaPage } from '@/libs/metapage'
import { getNewestPost } from '@/libs/sorters'
import { twclsx } from '@/libs/twclsx'

import { useSearchPost } from '@/hooks'

import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useMemo } from 'react'
import readingTime from 'reading-time'
import type { Post } from 'megnav'

type PostPageProps = {
  allPosts: Array<Post>
}

const meta = getMetaPage({
  title: 'Post',
  description: `You'll find a collection of my thoughts and musings on a variety of topics. I write about everything from current events to personal experiences, and I always strive to share my honest opinions. Keep in mind that my views are my own and do not necessarily reflect those of any other person or organization.`,
  keywords: ['NavinKumarMNK', 'Navin Kumar M', 'megnav', 'Navin Kumar M', 'megnav.me'],
  og_image: generateOgImage({
    title: 'Post - megnav.me',
    subTitle: 'Any thought I think interesting to share on my personal site'
  }),
  og_image_alt: 'Post — megnav.me',
  slug: '/post',
  type: 'website'
})

const PostPage: NextPage<PostPageProps> = ({ allPosts }) => {
  const search = useSearchPost(allPosts)
  
  useEffect(() => {
    if (typeof window === 'undefined' || !isProd) return
    ;(async () => {
      try {
        await axios.get(`https://megnav.me/api/revalidate?slug=/post&secret=${SECRET_KEY}`)
      } catch (err) {
        console.info('Could not revalidate')
      }
    })()
  }, [])

  return (
    <LayoutPage className='mt-3 max-w-[1600px]' {...(meta as LayoutPageProps)}>
      <Hero title={meta.title as string} description={meta.description as string} />

      <Searchbar onChange={search.handleChange} value={search.query} />

      {allPosts.length > 0 && search.query.length === 0 ? (
        <div className={twclsx('flex flex-col', 'gap-24')}>
          
          
          <PostList
            posts={allPosts}

            title=''
            description=""
          />
        </div>
      ) : null}

      {search.query.length > 0 && (
        <>
          {search.filteredPost.length > 0 ? (
            <PostList
              description="I've found some possible results for your search."
              posts={search.filteredPost}
              title=''
            />
          ) : (
            <EmptyResult />
          )}
        </>
      )}
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async () => {
  const response = await getContents<Post>('/post')
  if (isDev)
    return {
      props: {
        allPosts: response.map((r) => ({ ...r.header, est_read: readingTime(r.content).text })).sort(getNewestPost)
      }
    }

  const baseURL = isDev ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URL ?? 'https://megnav.me'

  const posts: Post[] = []

  const requests = response.map(async (r) => {
    const est_read = readingTime(r.content).text
    
    return { ...r.header, est_read } as Post
  })

  const settles = await Promise.allSettled(requests)

  settles.forEach((settle) => {
    if (settle.status === 'fulfilled') {
      posts.push(settle.value)
    }
  })

  return {
    props: {
      allPosts: posts.sort(getNewestPost)
    }
  }
}

export default PostPage
