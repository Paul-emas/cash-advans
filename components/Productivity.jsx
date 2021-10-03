import Image from 'next/image';

const Productivity = () => {
	return (
		<div className="min-h-screen bg-white">
			<div className="container mx-auto px-10">
				<div className="grid grid-cols-2 space-x-20 min-h-screen">
					<div>
						<div className="w-100 h-5/6 mt-2 relative center">
							<Image
								src="/images/banner-6.png"
								layout="fill"
								alt="lady banner image"
								className="object-contain relative"
							/>
						</div>
					</div>
					<div className="h-full">
						<div className="center">
							<h1 className="text-5xl 2xl:text-6xl 2xl:max-w-2xl font-semibold leading-tight">
								Increase Empolyees Productivity
							</h1>
							<p className="mt-5 mb-10 max-w-lg text-lg 2xl:text-xl text-primary-grey leading-relaxed">
								We nurture your staff’s Financial Health by allowing them to take charge of their finances.
								<br /> Our technology is designed with you in mind, to improve the productivity of your workforce and in
								turn, your business.
								<br />
								Did we mention this won’t cost you anything or have any impact on your company cashflow.
							</p>
							<div className="flex space-x-5">
								<button className="bg-primary-blue text-white py-3.5 px-10 text-sm 2xl:text-lg font-semibold rounded-full">
									Schedule Demo
								</button>
								<button className="bg-primary-green text-white py-3.5 px-10 text-sm 2xl:text-lg font-semibold rounded-full">
									Send an email
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Productivity;
