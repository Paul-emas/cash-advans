import Image from 'next/image';

const Refer = () => {
	return (
		<div className="min-h-screen bg-white">
			<div className="container mx-auto px-10">
				<div className="grid grid-cols-2 space-x-20 min-h-screen">
					<div>
						<div className="w-100 h-5/6 mt-2 relative center">
							<Image
								src="/images/banner-4.jpg"
								layout="fill"
								alt="lady banner image"
								className="object-contain relative"
							/>
						</div>
					</div>
					<div className="h-full">
						<div className="center">
							<h1 className="text-6xl max-w-lg font-semibold leading-tight">It’s not a loan. It’s not credit.</h1>
							<p className="mt-5 mb-10 max-w-lg text-xl text-primary-grey leading-relaxed">
								Using Payslice, you can withdraw your earned wages without breaking the bank.
								<br />
								It’s not a loan so there’s no impact on your credit score. Get the most out of your money with in-app
								budgeting tools and tips.
							</p>
							<button className="bg-primary-blue text-white py-3.5 px-10 text-lg font-semibold rounded-full">
								Refer your employer
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Refer;
