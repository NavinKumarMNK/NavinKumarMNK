import { PostList } from '@/components/content'

import { EmptyResult } from '@/UI/common'
import { Searchbar } from '@/UI/inputs'
import { Hero, LayoutPage } from '@/UI/templates'
import type { LayoutPageProps } from '@/UI/templates'

import { getContents } from '@/services'

import { SECRET_KEY, isDev, isProd } from '@/libs/constants/environmentState'
import { generateOgImage, getMetaPage } from '@/libs/metapage'
import { getMostPopularPost, getNewestPost } from '@/libs/sorters'
import { twclsx } from '@/libs/twclsx'

import { useSearchPost } from '@/hooks'

import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useMemo } from 'react'
import readingTime from 'reading-time'
import type { Post, PageViewResponse } from 'megnav'

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
  const mostViewdPosts = useMemo(() => allPosts.slice(0).sort(getMostPopularPost).slice(0, 2), [allPosts])

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
    <LayoutPage className='max-w-[1600px]' {...(meta as LayoutPageProps)}>
      <Hero title={meta.title as string} description={meta.description as string} />

      <Searchbar onChange={search.handleChange} value={search.query} />

      {allPosts.length > 0 && search.query.length === 0 ? (
        <div className={twclsx('flex flex-col', 'gap-24')}>
          <PostList
            displayViews
            posts={mostViewdPosts}
            title='Most Viewed'
            description='Hey, I thought you might be interested in checking out my most-viewed post. Feel free to give it a read.'
          />

          <PostList
            posts={allPosts}
            displayViews
            title='All Post'
            description="It looks like you're interested in my posts. You're welcome to take a look and read them, and they're sorted by date so you can easily find the newest ones."
          />
        </div>
      ) : null}

      {search.query.length > 0 && (
        <>
          {search.filteredPost.length > 0 ? (
            <PostList
              description="I've found some possible results for your search."
              displayViews
              posts={search.filteredPost}
              title='Search Post'
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
    const res = await axios.get<PageViewResponse>(baseURL + '/api/pageviews?slug=' + r.header.slug)
    const est_read = readingTime(r.content).text
    const views = res.data.view ?? 0

    return { ...r.header, views, est_read } as Post
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