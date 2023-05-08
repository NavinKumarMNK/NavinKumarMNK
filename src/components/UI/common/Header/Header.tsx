// import { useWindowScrollPos } from '@/hook/useWindowScrollPos'
import { UnstyledLink } from '@/UI/links'

import { twclsx } from '@/libs'
import APP_ROUTE from '@/libs/constants/route'

import { useWindowScrollY } from '@/hooks'

import { MobileNav } from './MobileNav'
import { ThemeMenu } from './ThemeMenu'

import { useRouter } from 'next/router'

export const Header: React.FunctionComponent = () => {
  const y = useWindowScrollY()
  const router = useRouter()
  const exceptedPage = ['/404', '/resume', '/_error', '/_offline']

  if (exceptedPage.includes(router.pathname)) return null

  return (
    <header
      className={twclsx(
        'sticky top-0 inset-x-0 z-50',
        'border-b border-b-transparent',
        'bg-theme-50 dark:bg-theme-900',
        'supports-[backdrop-filter:blur(0px)]:bg-theme-50/60 dark:supports-[backdrop-filter:blur(0px)]:bg-theme-900/60',
        'supports-[backdrop-filter:blur(0px)]:backdrop-blur-xl',
        y > 34 && 'border-b-theme-300 dark:border-b-theme-600'
      )}
    >
      <nav className='layout flex items-center justify-between h-14 md:h-14'>
        <div className=''>
        <img
            className="w-40"
            src="https://ik.imagekit.io/mnk/main-removebg-preview.png?updatedAt=1683444993946"
            
            alt="Logo"
          />
        </div>

        <div className='md:flex  md:items-center hidden space-x-5 justify-end'>
          
          {APP_ROUTE.map((route) => {
            return (
              <UnstyledLink
                className={twclsx(
                  'relative inline-flex items-center',
                  'border-b',
                  '',
                  'text-primary-700 dark:text-primary-400 font-semibold',
                  'after:absolute after:left-0 after:-bottom-0.5',
                  'after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full',
                  'after:bg-gradient-to-r after:from-primary-500 after:to-ternary-500',
                
                  router.pathname === route.path ? 'border-b-theme-900 dark:border-theme-200' : 'border-transparent'
                )}
                href={route.path}
                key={route.path}
              >
                {route.name}
              </UnstyledLink>
            )
          })}
        </div>

        <div className='inline-flex items-center md:justify-end space-x-2.5 md:space-x-0'>
          <ThemeMenu />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
