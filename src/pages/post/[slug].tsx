import { ToTopButton } from '@/components/UI/buttons'
import { PRButton } from '@/components/content'
import { AuthorSection, HeadingContent } from '@/components/content/post'
import { MDXComponents } from '@/components/content/mdx'

import { LayoutPage } from '@/UI/templates'
import type { LayoutPageProps } from '@/UI/templates'

import { getContentBySlug, getContents } from '@/services/content'

import { isDev } from '@/libs/constants/environmentState'
import { getMetaPagePost } from '@/libs/metapage'
import { twclsx } from '@/libs/twclsx'

import axios from 'axios'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import type { Post, PageViewResponse } from 'megnav'

interface PostPostProps {
  mdxSource: MDXRemoteSerializeResult
  header: Post
}

interface slug extends ParsedUrlQuery {
  slug: string
}

const PostPost: NextPage<PostPostProps> = ({ header, mdxSource }) => {
  const metaData = getMetaPagePost({
    ...header,
    slug: '/post/' + header.slug
  })

  
  return (
    <LayoutPage className='max-w-[1600px] mt-2' {...(metaData as LayoutPageProps)}>
      <article className={twclsx('content-auto', 'flex flex-col', 'gap-8')}>
        <HeadingContent
          topics={header.topics}
          est_read={header.est_read}
          published={header.published}
          summary={header.summary}
          title={header.title}
        />

        <AuthorSection name={header.author_name} username={header.github_username} />

        <div
          className={twclsx('prose dark:prose-invert', 'md:prose-md', 'prose-headings:scroll-mt-24', 'prose-img:my-4', 'max-w-full', 'md:mx-10', 'mx-2')}
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </article>

      <div className='mt-20 flex space-y-0 flex-row items-center justify-between'>
          <div></div>
          <div><ToTopButton /></div>
          
        </div>
    </LayoutPage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getContents<Post>('/post')

  const paths = res.map((r) => ({ params: { slug: r.header.slug } })) as GetStaticPathsResult['paths']

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostPostProps> = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mdxPrism = require('mdx-prism')

  const { slug } = ctx.params as slug

  const res = await getContentBySlug<Post>('/post', slug)
  const est_read = readingTime(res.content).text

  const mdxSource = await serialize(res.content, {
    mdxOptions: { rehypePlugins: [mdxPrism, rehypeSlug] }
  })

  return {
    props: {
      header: { est_read, ...res.header },
      mdxSource
    }
  }
}

export default PostPost
