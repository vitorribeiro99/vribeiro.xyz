import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 1, duration: 2 });
	useCountUp({ ref: 'yearsoldCounter', end: 23, duration: 2 });
	useCountUp({ ref: 'hackCounter', end: 2, duration: 2 });
	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years old"
					counter={<span id="yearsoldCounter" />}
					measurement=""
				/>
				<CounterItem
					title="Electronic and Computer Engineering"
					counter="MSc"
					measurement=""
				/>
				<CounterItem
					title="Year of experience as Blockchain Dev"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>
				<CounterItem
					title="Hackathons"
					counter={<span id="hackCounter" />}
					measurement=""
				/>

			</div>
		</div>
	);
};

export default AboutCounter;
