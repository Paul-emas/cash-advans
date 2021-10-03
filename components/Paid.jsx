import IconOne from '../public/assets/svgs/icon-3.svg';

const Paid = () => {
	return (
		<div className="py-32">
			<div className="container mx-auto px-10">
				<h1 className="text-4xl lg:text-6xl font-bold leading-snug text-gray-800 text-center">
					One day, everyone will be paid this way.
				</h1>
				<div className="grid grid-cols-2 space-x-16 mt-20 2xl:max-w-7xl 2xl:mx-auto">
					<div className="flex">
						<div>
							<IconOne />
						</div>
						<div className="ml-8">
							<h1 className="text-2xl font-bold">Your money. Your way. Your choice.</h1>
							<p className="text-lg text-gray-400 mt-5">
								Instant access to your money can help you feel more in control of your finances and reduce stress
								between paydays. Millions of employees are already enjoying the benefits of on-demand pay.
							</p>
						</div>
					</div>
					<div className="flex">
						<div>
							<IconOne />
						</div>
						<div className="ml-8">
							<h1 className="text-2xl font-bold">Flat fees on each transaction</h1>
							<p className="text-lg text-gray-400 mt-5">
								No more interest or extortionate late fees. Just instant access to the money you’ve earned. You could
								save money on interest by paying off credit card debt early, or simply start saving.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Paid;
