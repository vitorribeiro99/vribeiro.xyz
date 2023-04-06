import React from 'react';
import { motion } from 'framer-motion';

function CVBlock(props) {
  return (
    <motion.div className="block w-full justify-between sm:flex sm:space-x-4">
      <div className="relative mt-5 w-full space-y-3 border-l border-zinc-200/50 dark:border-zinc-700/50 sm:mt-0 sm:w-5/6">
        <div className="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
          <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-800"></div>
          <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
            {props.date}
          </p>
          <h1 className="general-sans-medium py-1 text-lg text-secondary-dark dark:text-primary-light sm:text-xl">
            {props.name}
          </h1>
          <p className="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
            <a href={props.link} className="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light" target="_blank">
              {props.place}
            </a>
            {props.optional}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CVBlock;
