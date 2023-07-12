import { UnstyledLink } from '@/UI/links'

import APP_ROUTE, { ADDT_ROUTE } from '@/libs/constants/route'
import { twclsx } from '@/libs/twclsx'

import { SocialHome } from './SocialHome'
import { useMediaQuery } from '@mui/material';

import { useRouter } from 'next/router'

export const Footer: React.FunctionComponent = () => {
  const { pathname } = useRouter()
  const isError = pathname === '/_error' || pathname === '/_offline' || pathname === '/404'
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  if (isError) {
    return null
  }

  return (
    <footer className={twclsx('layout', 'py-4 mt-5', 'border-t', 'border-theme-300 dark:border-theme-700')}>
      { isSmallScreen ? (
        
        <div className='flex flex-col space-y-3 space-y-0 space-x-3 justify-between'>
        <div className='mt-5 absolute h-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center text-center'>
        <div className='flex pt-8 flex-col space-y-3 text-center items-center'>
          {APP_ROUTE.map((route) => (
            <UnstyledLink
              href={route.path}
              key={`footer-${route.path}`}
              className='text-sm font-medium border-b border-transparent hover:border-b-theme-500 text-theme-500 dark:text-theme-400'
            >
              {route.name}
            </UnstyledLink>
          ))}
        </div>
        <div className='mt-4'>
        <p className='center text-sm text-gray-500 dark:text-gray-400'>
          &copy; 2023 Navin Kumar M. All rights reserved.
        </p>
            &nbsp;
        </div>
      </div>
      </div>
      ):(
        <div className=' flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:justify-between'>
        <div className='flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 w-full md:max-w-max'>
          {APP_ROUTE.map((route) => (
            <UnstyledLink
              href={route.path}
              key={`footer-${route.path}`}
              className='text-sm font-medium border-b border-transparent hover:border-b-theme-500 text-theme-500 dark:text-theme-400'
            >
              {route.name}
            </UnstyledLink>
          ))}
        </div>
        <div className='mt-4'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          &copy; 2023 Navin Kumar M. All rights reserved.
        </p>
      </div>
      </div>
      
      )}
    </footer>
  )
}
