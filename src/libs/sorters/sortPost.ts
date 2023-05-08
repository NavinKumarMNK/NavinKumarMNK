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

