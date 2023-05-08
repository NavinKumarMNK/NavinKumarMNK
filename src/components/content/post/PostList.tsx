import { twclsx } from '@/libs'

import { PostItem } from './PostItem'

import type { Post } from 'megnav'

type PostListProps = {
  posts: Post[]
  title: string
  description: string
  className?: string
}

export const PostList: React.FunctionComponent<PostListProps> = ({ ...props }) => {
  return (
    <section className={twclsx('py-4', props.className)}>
      <h2 className='mb-1 md:mb-3'>{props.title}</h2>
      <p className='mb-6 md:mb-8'>{props.description}</p>

      {props.posts.length > 0 && (
        <div className='flex flex-col'>
        {props.posts.map((post) => {
          return (
            <div key={post.slug} className='bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 rounded-lg shadow-lg p-6 mb-5'>
              <PostItem {...post}/>
            </div>
          )
        })}
      </div>
      
      )}
    </section>
  )
}
