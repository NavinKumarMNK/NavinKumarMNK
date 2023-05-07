import { twclsx } from '@/libs'

import { PostItem } from './PostItem'

import type { Post } from 'megnav'

type PostListProps = {
  posts: Post[]
  title: string
  description: string
  displayViews?: boolean
  className?: string
}

export const PostList: React.FunctionComponent<PostListProps> = ({ displayViews, ...props }) => {
  return (
    <section className={twclsx('py-16', props.className)}>
      <h2 className='mb-1 md:mb-3'>{props.title}</h2>
      <p className='mb-6 md:mb-8'>{props.description}</p>

      {props.posts.length > 0 && (
        <div className='flex flex-col'>
          {props.posts.map((post) => {
            return <PostItem key={post.slug} {...post} displayViews={displayViews} />
          })}
        </div>
      )}
    </section>
  )
}
