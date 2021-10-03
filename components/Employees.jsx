import Image from 'next/image';

export const Employees = () => {
	return (
		<div className="min-h-screen bg-white overflow-hidden">
			<div className="container mx-auto px-10">
				<div className="grid grid-cols-2 space-x-20 min-h-screen">
					<div>
						<div className="w-full relative h-banner top-1/2 transform -translate-y-1/2">
							<Image
								src="/images/banner-2.jpg"
								layout="fill"
								alt="lady banner image"
								className="object-cover rounded-2xl overflow-hidden"
							/>
						</div>
					</div>
					<div className="h-full">
						<div className="relative top-1/2 transform -translate-y-1/2">
							<h1 className="text-6xl max-w-md font-semibold leading-tight">Employees love us</h1>
							<p className="mt-5 max-w-lg text-xl text-primary-grey leading-relaxed">
								We enable your employees to access a portion of their earned pay when they need it, on-demand. <br /> We
								deliver a suite of financial education and management tools, including savings, to help your people make
							</p>
							<p className="mt-2 mb-10 max-w-lg text-primary-grey text-xl leading-relaxed">
								Our award-winning technology is built to improve the productivity of your workforce and, in turn, the
								productivity of your organisation.
							</p>
							<a href="" className="font-medium text-primary-green text-xl">
								<span>Refer your Employer</span>
								<span className="ml-8 text-2xl">&#8594;</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
