import { ToTopButton } from '@/components/UI/buttons'
import { WrappedImage } from '@/components/UI/images'
import { HeadingPortfolio, IconStack, MDXComponents, PRButton } from '@/components/content'

import { LayoutPage } from '@/UI/templates'

import { getContentBySlug, getContents } from '@/services'

import { dateFormat, dateStringToISO } from '@/libs/intl'
import { getMetaPage } from '@/libs/metapage'
import { twclsx } from '@/libs/twclsx'

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import type { ParsedUrlQuery } from 'querystring'
import { HiOutlineCalendar } from 'react-icons/hi'
import rehypeSlug from 'rehype-slug'
import type { Portfolio } from 'megnav'

type ProjectDetailPageProps = {
  header: Portfolio
  mdxSource: MDXRemoteSerializeResult
}

const ProjectDetailPage: NextPage<ProjectDetailPageProps> = ({ header, mdxSource }) => {
  const metaData = getMetaPage({
    title: header.title,
    description: header.summary,
    og_image: header.image,
    og_image_alt: header.title,
    keywords: header.stack,
    slug: '/portfolio/' + header.slug
  })

  return (
    <LayoutPage className='max-w-[1600px] mt-2' seo={metaData}>
      <article className={twclsx('flex flex-col', 'gap-8')}>
        <HeadingPortfolio {...header} />

        <section className={twclsx('flex flex-col gap-4', 'md:flex-row md:items-center md:justify-between')}>
          <div className={twclsx('flex items-center gap-3', 'w-full')}>
            {header.stack.map((s) => (
              <span className={twclsx('text-2xl')} key={s}>
                <IconStack type={s} />
              </span>
            ))}
          </div>

          <div className={twclsx('flex items-center justify-start', 'w-full gap-2', 'md:text-right md:justify-end')}>
            <HiOutlineCalendar className={twclsx('text-lg')} />
            <time className={twclsx('text-sm md:text-base')} dateTime={dateStringToISO(header.date)}>
              {dateFormat(header.date, undefined, { dateStyle: 'medium' })}
            </time>
          </div>
        </section>

        <WrappedImage
          title={header.title}
          alt={header.title}
          src={header.image}
          parentStyle='w-full h-56 sm:h-72 md:h-96 my-4'
          className='object-cover rounded-md'
          priority
          fill
        />
        
        <div
          className={twclsx('prose dark:prose-invert', 'md:prose-md', 'prose-headings:scroll-mt-24', 'prose-img:my-4', 'max-w-full', 'md:mx-10', 'mx-2')}
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>

        <div className='flex space-y-0 flex-row items-center justify-between mt-5'>
          <div><PRButton path={`/portfolio/${header.slug}.mdx`} /></div>
          <div><ToTopButton /></div>
          
        </div>
      </article>
    </LayoutPage>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const portfolio = await getContents<Portfolio>('/portfolio')

  const paths = portfolio.map((p) => ({ params: { slug: p.header.slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProjectDetailPageProps> = async (ctx) => {
  const mdxPrism = await require('mdx-prism')
  const { slug } = ctx.params as ParsedUrlQuery & { slug: string }

  const res = await getContentBySlug<Portfolio>('/portfolio', slug)

  const mdxSource = await serialize(res.content, { mdxOptions: { rehypePlugins: [mdxPrism, rehypeSlug] } })

  return {
    props: {
      header: res.header,
      mdxSource
    }
  }
}

export default ProjectDetailPage
