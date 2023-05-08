import { PortfolioItem } from './PortfolioItem'

import { Portfolio } from 'megnav'

type PortfolioListProps = {
  title: string
  portfolios: Portfolio[]
  description: string
}

export const PortfolioList: React.FunctionComponent<PortfolioListProps> = (props) => {
  return (
    <section className='py-16'>
      <h2 className='mb-1 md:mb-3'>{props.title}</h2>
      <p className='mb-6 md:mb-8'>{props.description}</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
  {props.portfolios.map((item) => {
    return (
      <div key={item.slug} className="bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-md backdrop-opacity-80">
        <PortfolioItem {...item} />
      </div>
    )
  })}
</div>


    </section>
  )
}
