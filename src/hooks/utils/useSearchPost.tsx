import { toLowerCase } from '@/libs/string'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Post } from 'megnav'

export const useSearchPost = (posts: Post[]) => {
  const [query, setQ] = useState('')
  const [filteredPost, sFB] = useState<Post[]>([])
  const mounted = useRef(true)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value), [])

  useEffect(() => {
    if (mounted.current) {
      mounted.current = false
      return
    }

    ;(() => {
      if (posts.length === 0) return

      const filtered = posts.filter((post) => {
        return (
          toLowerCase(post.title).includes(toLowerCase(query)) ||
          toLowerCase(post.summary).includes(toLowerCase(query)) ||
          post.topics.map((t) => t.includes(query)).includes(true)
        )
      })

      sFB(filtered)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return {
    query,
    handleChange,
    filteredPost
  }
}
