import type { Post } from 'megnav'

/**
 * It takes two post posts and returns 1 if the first post post is newer than the second, -1 if the
 * second post post is newer than the first, and 0 if they are the same age
 * @param {Post} a - Post - the first post
 * @param {Post} b - Post - the current post
 * @returns a number.
 */
export const getNewestPost = (a: Post, b: Post) => {
  return new Date(a.published) < new Date(b.published) ? 1 : new Date(a.published) > new Date(b.published) ? -1 : 0
}

/**
 * If both posts have 0 views, return 0. Otherwise, return 1 if the first post has less views than the
 * second post, -1 if the first post has more views than the second post, and 0 if they have the same
 * number of views
 * @param {Post} a - Post
 * @param {Post} b - Post - the second post to compare
 * @returns a number.
 */
export const getMostPopularPost = (a: Post, b: Post) => {
  const aviews = a.views as number
  const bviews = b.views as number

  if (aviews === 0 && bviews === 0) {
    return 0
  }
  return aviews < bviews ? 1 : aviews > bviews ? -1 : 0
}
