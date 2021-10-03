import Image from 'next/image';
import { Navbar } from './layout/Navbar';

const EmployerHeader = () => {
	return (
		<div className="min-h-screen bg-primary-gray overflow-hidden">
			<div className="container mx-auto px-10">
				<Navbar />
				<div className="grid grid-cols-2 min-h-screen py-7 2xl:py-10">
					<div>
						<div className="max-w-xl relative top-1/4 2xl:top-1/2 transform -translate-y-1/4 2xl:-translate-y-1/2">
							<h1 className="text-6xl text-primary-blue font-bold leading-tight">
								We are here to help your business <br />
								<span className="text-primary-green relative mx-3 z-10 circle circle-2">grow</span>
							</h1>
							<p className="mt-14 text-primary-blue text-xl leading-relaxed pr-18">
								Thousands of people are already enjoying on-demand pay as an employee benefit. Engage your employees,
								increase retention, and recruit talent faster.
							</p>
							<button className="mt-14 bg-primary-blue text-white py-3.5 px-10 text-lg font-semibold rounded-full">
								Schedule Demo
							</button>
						</div>
					</div>
					<div className="relative">
						<Image
							src="/images/banner-5.png"
							layout="fill"
							alt="header image banner"
							className="object-contain float-right right-0"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployerHeader;
