import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { selectedProject } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">

						<img
							src={selectedProject.ProjectImages.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={selectedProject.ProjectImages.title}
							key={selectedProject.ProjectImages.id}
						/>
					</div>
	);
};

export default ProjectGallery;
