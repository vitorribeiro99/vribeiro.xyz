import React from 'react';
import CVBlock from './educationData';

function CVData() {
  const educationData = [
    {
      date: 'Sep 2020 - Sep 2022',
      name: 'Master Degree in Electronic and Computers Engineering',
      link: 'https://www.uminho.pt/',
      place: 'University of Minho',
      optional: '- Thesis Grade 18/20'
    },
    {
      date: 'Sep 2017 - Jun 2020',
      name: 'Bacelhor Degree in Electronic and Computers Engineering',
      link: 'https://www.uminho.pt',
      place: 'University of Minho',
      optional: ''
    }
  ];
  const experienceData = [
    {
      date: 'Sep 2020 - Sep 2022',
      name: 'Member of Fiscal and Jurisdictional Council',
      link: 'https://www.uminho.pt/',
      place: 'University of Minho',
      optional: ''
    },
    {
      date: 'Sep 2017 - Jun 2020',
      name: 'President',
      link: 'https://www.uminho.pt',
      place: 'NEEEICUM',
      optional: '- Núcleo de Estudantes de Engenharia Eletrónica Industrial e Computadores'
    }
  ];

  return (
    <>
      <CVTitle title="Education" />
      {educationData.map((data, index) => (
        <CVBlock key={index} {...data} />
      ))}
 

    <CVTitle title="Experience" />
    {experienceData.map((data, index) => (
        <CVBlock key={index} {...data} />
    ))}
    </>
  );
}

function CVTitle({ title }) {
  return (
    <div className="w-full items-baseline space-y-3 sm:w-2/6 md:flex md:justify-start">
      <h1 className="general-sans-medium rounded-sm border-l-2 border-zinc-100 pl-3 text-2xl text-zinc-700 dark:border-zinc-800/80 dark:text-zinc-100 sm:text-3xl ">
        {title}
      </h1>
    </div>
  );
}

export default CVData;
