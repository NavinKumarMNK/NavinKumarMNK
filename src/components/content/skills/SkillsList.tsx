import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Skills() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('./Skills.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export const SkillsList: React.FunctionComponent = () => {
    return (
        <section className='py-16'>
            <h2 className='mb-1 md:mb-3'>Featured Skills</h2>
            <p className='mb-6 md:mb-8'>Technolgoies, Frameworks & Language I'm Expertise in</p>
                <Skills />
        </section>
    )
}