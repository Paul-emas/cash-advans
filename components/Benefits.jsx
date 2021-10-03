import Image from 'next/image';
import CheckIcon from '../public/assets/svgs/check.svg';

const Benefits = () => {
	return (
		<div className="min-h-screen bg-white overflow-hidden">
			<div className="container mx-auto px-10">
				<div className="grid grid-cols-2 space-x-7 min-h-screen">
					<div className="h-full">
						<div className="relative top-1/2 transform -translate-y-1/2">
							<h1 className="text-5xl 2xl:text-6xl max-w-md font-semibold leading-tight">Benefits for Employers</h1>
							<div className="flex items-center mt-7 mb-7">
								<div>
									<CheckIcon></CheckIcon>
								</div>
								<p className="font-medium text-base 2xl:text-xl ml-6 text-primary-grey max-w-lg">
									Access to Payroll management your comfort zone{' '}
								</p>
							</div>
							<div className="flex items-center mb-7">
								<div>
									<CheckIcon></CheckIcon>
								</div>
								<p className="font-medium text-base 2xl:text-lg ml-6 text-primary-grey max-w-lg">
									Offer earned wage access at any time during payroll cycle, free from cash flow concerns
								</p>
							</div>
							<div className="flex items-center mb-7">
								<div>
									<CheckIcon></CheckIcon>
								</div>
								<p className="font-medium text-base 2xl:text-lg ml-6 text-primary-grey max-w-lg">
									Seamlessly create smart rules to govern how employees use this benefit
								</p>
							</div>
							<div className="flex items-center mb-7">
								<div>
									<CheckIcon></CheckIcon>
								</div>
								<p className="font-medium text-base 2xl:text-lg ml-6 text-primary-grey max-w-lg">
									Eliminate requests for manual payroll advances and associated processes/costs
								</p>
							</div>
							<div className="flex items-center mb-7">
								<div>
									<CheckIcon></CheckIcon>
								</div>
								<p className="font-medium text-base 2xl:text-lg ml-6 text-primary-grey max-w-lg">
									Improve employee productivity and lower workforce absenteeism
								</p>
							</div>
							<div className="flex items-center mb-7">
								<div>
									<CheckIcon></CheckIcon>
								</div>
								<p className="font-medium text-base 2xl:text-lg ml-6 text-primary-grey max-w-lg">
									Enhance employee satisfaction and reduce staff turnover
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="w-full relative h-banner top-1/2 transform -translate-y-1/2">
							<Image
								src="/images/banner-7.jpg"
								layout="fill"
								alt="lady banner image"
								className="object-cover rounded-2xl overflow-hidden"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
