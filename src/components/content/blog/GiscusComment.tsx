import { useTheme } from '@/hooks'

import Giscus from '@giscus/react'
import { memo } from 'react'

export const GiscusComment = memo(() => {
  const { theme, systemTheme } = useTheme()

  const gcTheme = theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? 'dark' : 'light'

  /* Change the repoId and categoryId properties with do setup at giscus.app */
  return (
    <div className='mt-4 md:mt-8'>
      <Giscus
        lang='en'
        theme={gcTheme}
        emitMetadata='0'
        inputPosition='top'
        repo='rizkimcitra/megnav.me'
        repoId='R_kgDOGh4MEw'
        category='General'
        categoryId='DIC_kwDOGh4ME84CPxWe'
        mapping='pathname'
        reactionsEnabled='0'
        loading='lazy'
      />
    </div>
  )
})

GiscusComment.displayName = 'GiscusComment'
