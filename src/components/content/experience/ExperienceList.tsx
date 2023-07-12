const experience = [
    {
      role: 'Machine Learning Engineer',
      company: 'Gutsy Innovations',
      span: 'May 2023 - July 2023',
      imageUrl:
        'https://ik.imagekit.io/mnk/1519952574147.jpeg?updatedAt=1689171753543',
    },
  ]
  
  export const ExperienceList: React.FunctionComponent = () => {
    return (
      <section className='py-8 md:py-16'>
      <h2 className='mb-3 text-center md:text-left'>Experience </h2>
      
      <div className='flex-row space-y-3 md:space-y-0 sm:space-x-3 sm:flex-row '>
      <div className='justify-center  md:justify-start bg-white dark:bg-gray-900 rounded-lg shadow-lg px-4 pt-2 pb-2'>
      <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700 flex flex-wrap">
  {experience.map((experience) => (
    <li key={experience.company} className="flex justify-between gap-x-5 py-2 flex-grow">
      <div className="flex gap-x-6">
        <img className="h-20 w-25 flex-none rounded-md bg-gray-50 dark:bg-gray-900" src={experience.imageUrl} alt="" />
        <div className="min-w-0 flex-auto">
          <p className="text-l font-semibold leading-6 text-gray-900 dark:text-gray-100">{experience.role}</p>
          <p className="mt-1 truncate text-l leading-5 text-gray-500 dark:text-gray-400">
            {experience.company}
            <span className="sm:hidden block text-sm leading-6 text-gray-900 dark:text-gray-100">{experience.span}</span>
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-m leading-6 text-gray-900 dark:text-gray-100">{experience.span}</p>
      </div>
    </li>
  ))}
</ul>
      </div>
      </div>
      </section>
    )
  }
  