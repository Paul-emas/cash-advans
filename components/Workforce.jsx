/* eslint-disable @next/next/no-img-element */

export const Workforce = () => {
	return (
		<div className="min-h-screen bg-white overflow-hidden">
			<div className="container mx-auto px-10">
				<div className="grid grid-cols-2 space-x-20 min-h-screen">
					<div className="h-full">
						<div className="center">
							<h1 className="text-6xl max-w-lg font-semibold leading-tight">Make your workforce more productive.</h1>
							<p className="mt-5 mb-10 max-w-lg text-xl text-primary-grey leading-relaxed">
								Cashadvans can be offered to all employees, no matter what type of contract or seniority, and drives
								real productivity improvements. <br /> With no cost or cash flow impact to you, the employer, it has the
								ultimate ROI.
							</p>
							<a href="" className="font-medium text-primary-green text-xl">
								<span>Tell me more</span>
								<span className="ml-8 text-2xl">&#8594;</span>
							</a>
						</div>
					</div>
					<img
						src="/images/banner-8.png"
						alt="lady banner image"
						className="object-cover scale-125 relative left-5 top-1/2 transform -translate-y-1/2"
					/>
				</div>
			</div>
		</div>
	);
};
