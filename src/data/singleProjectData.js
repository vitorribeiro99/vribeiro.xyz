// Import images
import Image1 from '../images/publed_landingpage.png';
import Image2 from '../images/logo-no-background.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	Publed:{
		ProjectHeader: {
			id: 1, 
			title: 'Publed',
			publishDate: 'In progress...',
			tags: 'Web3, DeSci (Decentralized Science)',
		},
		ProjectImages:
			{
				id: 1,
				title: 'Publed',
				img: Image1,
			},
		ProjectInfo: {
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Publed',
				},
				{
					id: 2,
					title: 'Website',
					details: 'https://publed.io',
				},
				{
					id: 4,
					title: 'Team',
					details: 'Vítor Ribeiro, Sandro Pinto, Mohamed Hassan',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	},
	FundECO:{
		ProjectHeader: 
		{
			id: 1, 
			title: 'Fund ECO',
			publishDate: 'March 2023',
			tags: 'Web3, Crowdlending',
		}
	,
		ProjectImages: 
			{
				id: 2,
				title: 'Fund ECO',
				img: Image2,
			},
		ProjectInfo: {
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	}
};
