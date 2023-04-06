import { Link } from 'react-router-dom';
import AppBanner from '../components/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import {motion} from 'framer-motion';
import CVData from '../data/education';

const Home = () => {
	return (
		<div className="container mx-auto">
            
            {/* <motion.div class="block w-full justify-between sm:flex sm:space-x-4">
<div class="w-full items-baseline space-y-3 sm:w-2/6 md:flex md:justify-start">
    <h1 class="general-sans-medium rounded-sm border-l-2 border-zinc-100 pl-3 text-2xl text-zinc-700 dark:border-zinc-800/80 dark:text-zinc-100 sm:text-3xl ">
        Education
    </h1>
</div>
<div class="relative mt-5 w-full space-y-3 border-l border-zinc-200/50 dark:border-zinc-700/50 sm:mt-0 sm:w-5/6">
    <div class="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
        <div class="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-800">
            </div>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                Sep 2020 - Sep 2022
            </p>
            <h1 class="general-sans-medium py-1 text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                Master Degree in Electronic and Computers Engineering 
            </h1>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                <a href="https://www.uminho.pt/" class="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light" target="_blank">
                    University of Minho 
                </a>
                  - Thesis Grade 18/20
            </p>
            </div>
            <div class="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                <div class="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-800">
            </div>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                Sep 2017 - Jun 2020
            </p>
            <h1 class="general-sans-medium py-1 text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
            Bacelhor Degree in Electronic and Computers Engineering 
            </h1>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400"><a href="https://www.uminho.pt" class="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light" target="_blank">
            University of Minho
            </a>
            </p>
            </div>
        </div>
    </motion.div> */}
    <CVData></CVData>

<br></br>
    {/* <motion.div class="block w-full justify-between sm:flex sm:space-x-4">
<div class="w-full items-baseline space-y-3 sm:w-2/6 md:flex md:justify-start">
    <h1 class="general-sans-medium rounded-sm border-l-2 border-zinc-100 pl-3 text-2xl text-zinc-700 dark:border-zinc-800/80 dark:text-zinc-100 sm:text-3xl ">
        Associations
    </h1>
</div>
<div class="relative mt-5 w-full space-y-3 border-l border-zinc-200/50 dark:border-zinc-700/50 sm:mt-0 sm:w-5/6">
    <div class="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
        <div class="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-800">
            </div>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                2022 - 2023
            </p>
            <h1 class="general-sans-medium py-1 text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
                Member of Fiscal and Jurisdictional Council
            </h1>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                <a href="https://www.aaum.pt/" class="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light" target="_blank">
                    AAUM
                </a>
                  - Associação Académica da Universidade do Minho
            </p>
            </div>
            <div class="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                <div class="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-800">
            </div>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                2021 - 2023
            </p>
            <h1 class="general-sans-medium py-1 text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
            President 
            </h1>
            <p class="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400"><a href="https://neeeicum.dei.uminho.pt/" class="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light" target="_blank">
            NEEEICUM
            </a>
            - Núcleo de Estudantes de Engenharia Eletrónica Industrial e Computadores
            </p>
            </div>
        </div>
    </motion.div> */}
    

    </div>
	);
};

export default Home;




