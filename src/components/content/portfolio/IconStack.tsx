import { twclsx } from '@/libs/twclsx'

import {
  SiCodesandbox,
  SiCss3,
  SiFirebase,
  SiFramer,
  SiGo,
  SiJavascript,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPytorch,
  SiPytorchlightning,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiRay
} from 'react-icons/si'

type IconStackProps = {
  type: string
  className?: string
}

export const IconStack: React.FunctionComponent<IconStackProps> = ({ type, className }) => {
  const check = type.toLowerCase()
  switch (check) {
    case 'react':
    case 'react.js':
    case 'reactjs':
      return <SiReact className={twclsx('text-sky-500', className)} />

    case 'next.js':
    case 'nextjs':
      return <SiNextdotjs className={twclsx('text-theme-800 dark:text-theme-200', className)} />
    case 'nodejs':
    case 'node.js':
      return <SiNodedotjs className={twclsx('text-emerald-500', className)} />

    case 'vite':
      return <SiVite className={twclsx('text-yellow-500', className)} />

    case 'redux':
      return <SiRedux className={twclsx('text-violet-500', className)} />

    case 'firebase':
      return <SiFirebase className={twclsx('text-amber-500', className)} />

    case 'tailwindcss':
    case 'tailwind css':
      return <SiTailwindcss className={twclsx('text-teal-500', className)} />

    case 'sass':
    case 'scss':
      return <SiSass className={twclsx('text-pink-500 dark:text-pink-400', className)} />

    case 'css':
    case 'CSS':
      return <SiCss3 className={twclsx('text-blue-600 dark:text-blue-500', className)} />

    case 'framer motion':
      return <SiFramer className={twclsx('text-theme-800 dark:text-theme-200', className)} />

    case 'javascript':
      return <SiJavascript className={twclsx('text-yellow-500', className)} />

    case 'typescript':
      return <SiTypescript className={twclsx('text-blue-600', className)} />

    case 'markdown':
      return <SiMarkdown className={twclsx('text-theme-800 dark:text-theme-200', className)} />

    case 'supabase':
      return <SiSupabase className={twclsx('text-emerald-600 dark:text-emerald-500', className)} />

    case 'go':
      return <SiGo className={twclsx('text-emerald-600 dark:text-emerald-500', className)} />

    case 'pytorch':
      return <SiPytorch className={twclsx('text-red-500', className)} />

    case 'pytorch lightning':
      return <SiPytorchlightning className={twclsx('text-violet-500', className)} />
    
    case 'ray':
      return <SiRay className={twclsx('text-blue-500', className)} />

    case 'python':
      return <SiPython className={twclsx('text-blue-500', className)} />

    case 'tensorflow':
      return <SiTensorflow className={twclsx('text-amber-500', className)} />

    case 'opencv':
      return <SiOpencv className={twclsx('text-amber-500', className)} />

    case 'numpy':
      return <SiNumpy className={twclsx('text-green-500', className)} />

    case 'pandas':
      return <SiPandas className={twclsx('text-amber-500', className)} />

    case 'scikit-learn':
      return <SiScikitlearn className={twclsx('text-red-500', className)} />

    default:
      return <SiCodesandbox className={twclsx('text-slate-900 dark:text-slate-800', className)} />
  }
}
