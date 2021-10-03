import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';

const Accordion = ({ question, ans, list }) => {
	const [isActive, setIsActive] = useState(false);
	console.log(list);

	return (
		<div>
			<div
				onClick={() => setIsActive(!isActive)}
				className="bg-white rounded-2xl duration-200 shadow-bg cursor-pointer py-7 lg:py-8 px-7 lg:px-10"
			>
				<div className="flex justify-between">
					<h2 className="text-lg lg:text-xl text-gray-700 font-medium">{question}</h2>
					{isActive ? <ChevronDownIcon className="w-7 h-7" /> : <ChevronRightIcon className="w-7 h-7" />}
				</div>
				<div
					className={`${
						!isActive ? 'h-0 overflow-hidden opacity-0' : 'mt-5'
					} transition-all duration-300 text-lg text-gray-700`}
				>
					{ans}
					{list && (
						<ul>
							{list.map((list, index) => (
								<li className=" list-disc ml-8 mt-4" key={index}>
									{list}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
