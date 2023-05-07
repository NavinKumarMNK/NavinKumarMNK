import { CustomSeo } from '@/components'
import { PostList, ContentImage, PortfolioList, SkillsList } from '@/components/content'

import { Footer, SocialHome } from '@/UI/common'

import { GetContents, getContents } from '@/services'

import { getMetaPage } from '@/libs/metapage'
import { getNewestPost, getNewestPortfolio } from '@/libs/sorters'

import type { GetStaticProps, NextPage } from 'next'
import readingTime from 'reading-time'
import type { Post, Portfolio } from 'megnav'

interface HomePageProps {
  posts: Array<Post>
  portfolios: Array<Portfolio>
}

const HomePage: NextPage<HomePageProps> = ({ posts, portfolios }) => {
  const meta = getMetaPage({
    title: 'NavinKumarMNK',
    template: 'Data Scientist, ML Engineer, Student',
    description: `Personal Website & Portfolio, Built On Top Of NEXT.js, An Online Space For NavinK To Share His Knowledge And Experience.`,
    keywords: ['NavinKumarMNK', 'Navin Kumar M', 'megnav.me'],
    og_image: `https://ik.imagekit.io/mnk/NavinKumarMNK.jpg?updatedAt=1683442016874`,
    og_image_alt: 'NavinKumarMNK',
    slug: '/',
    type: 'website'
  })
  return (
    <>
      <CustomSeo {...meta} />

      <div className='w-full h-40 md:layout pattern ' />

      <main className='layout'>
        <section className='flex flex-col'>
          <div className='relative flex h-14 md:h-16'>
            <ContentImage
              src='https://ik.imagekit.io/mnk/NavinKumarMNK.jpg?updatedAt=1683442016874'
              alt='Navin Kumar M'
              width={146}
              height={146}
              className='rounded-full absolute left-5 bottom-0.5 cursor-pointer border-theme-50 dark:border-theme-900'
              title="Navin Kumar M's Profile Picture"
              quality={100}
              priority
            />
            <SocialHome className='ml-auto max-w-max' />
          </div>

          <div className='mt-3 md:mt-6'>
            <h1>Navin Kumar M</h1>
            <h2 className='max-w-max mb-7 text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-primary-500 to-ternary-500 dark:text-transparent'>
              UnderGrad &amp; ML Engineer, Data Scientist
            </h2>

            <div className='[&>p:not(:last-child)]:mb-3'>
              <p>
              Hello👋, This is <strong>Navin Kumar M</strong>, and I'm passionate about using <strong>Artificial Intelligence</strong> to solve <strong>Complex 
                Real-World Problems </strong>. By leveraging the latest advancements in <strong>Deep Learning, </strong>  I strive to create innovative solutions that have a positive impact on society.
                I invite you to have a glimpse of my journey as an <strong>AI Enthusiast </strong> and my expertise in various domains. 
              </p><p>
              I have worked in fields like <strong>Computer Vision, Natural Language Processing,
               Generative Models, Modelling Tabular & Time Series Data </strong>. I have worked on diverse projects that have helped me hone my skills and gain a deeper understanding of the field.
              
              </p>
              <p>
                I am passionate about <strong>PreTraining Models on Large Data, Solving Complex Machine Learning Problems</strong> and enjoy deploying <strong>Production level Scalable Systems.</strong> I love
                combining my technical knowledge and creativity to create and deploy entire <strong>MLOps Pipeline</strong> with full fledge working Application.
              </p>

            </div>
          </div>
        </section>

        <SkillsList />

        <PostList
          className='pt-32'
          description="If you're looking for some interesting reads, check out my featured post post. sorted from latest to least, feel free to explore it."
          posts={posts}
          title='Featured Post'
        />

        <PortfolioList
          description='Check out my featured portfolio, feel free to explore it.'
          title='Featured Portfolio'
          portfolios={portfolios}
        />
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [requestPosts, requestPortfolios] = await Promise.allSettled([
    getContents<Post>('/post'),
    getContents<Portfolio>('/portfolio')
  ])

  const postsData = [] as Array<GetContents<Post>>
  const portfoliosData = [] as Array<GetContents<Portfolio>>
  // const portfoliosData = [] as Array<Portfolio>

  if (requestPosts.status === 'fulfilled') {
    requestPosts.value.forEach((post) => {
      postsData.push(post)
    })
  }
  if (requestPortfolios.status === 'fulfilled') {
    requestPortfolios.value.forEach((portfolio) => {
      portfoliosData.push(portfolio)
    })
  }

  const posts = postsData
    .filter((r) => r.header.featured)
    .map((r) => ({ est_read: readingTime(r.content).text, ...r.header }))
    .sort(getNewestPost)

  const portfolios = portfoliosData
    .map((p) => p.header)
    .filter((f) => f.featured)
    .sort(getNewestPortfolio)

  return {
    props: {
      posts,
      portfolios
    }
  }
}

export default HomePage
