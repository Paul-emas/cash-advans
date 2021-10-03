import Image from 'next/image';
import { Navbar } from './layout/Navbar';

const EmployeeHeader = () => {
	return (
		<div className="min-h-screen bg-primary-gray overflow-hidden">
			<div className="container mx-auto px-10">
				<Navbar />
				<div className="grid grid-cols-2 min-h-screen py-7 2xl:py-10">
					<div>
						<div className="max-w-lg relative top-1/3  transform -translate-y-1/3">
							<h1 className="text-6xl text-primary-blue font-bold leading-tight">
								Access your <span className="text-primary-green relative mx-3 z-10 circle">Pay</span> Before Payday
							</h1>
							<p className="mt-8 text-primary-blue text-xl leading-relaxed pr-18">
								Now you don’t have to wait until payday to get your salary.Get daily access to the money you’ve earned.
							</p>
							<button className="mt-14 bg-primary-blue text-white py-3.5 px-10 text-lg font-semibold rounded-full">
								Refer your employer
							</button>
						</div>
					</div>
					<div className="relative">
						<Image
							src="/images/banner-3.png"
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

export default EmployeeHeader;
