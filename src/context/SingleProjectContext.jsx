import { useState, createContext } from 'react';
import { singleProjectData } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectTitle, children }) => {
	console.log("singleProjectData", singleProjectData)

	let title = "";

	switch (projectTitle) {
		case "fund-eco":
		  title = "FundECO";
		  break;
		case "publed":
		  title = "Publed";
		  break;
	  }

	console.log("projecto: ", singleProjectData["Publed"] )


	const [selectedProject, setSelectedProject] = useState(
		singleProjectData[title]
	);


	return (
		<SingleProjectContext.Provider
			value={{ selectedProject }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
