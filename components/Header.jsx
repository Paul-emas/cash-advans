import Image from 'next/image';
import { Navbar } from './layout/Navbar';

export const Header = () => {
	return (
		<div className="min-h-screen bg-primary-gray overflow-hidden">
			<div className="container mx-auto px-10">
				<Navbar />
				<div className="grid grid-cols-2 min-h-screen py-7 2xl:py-10">
					<div>
						<div className="max-w-lg relative top-1/4 2xl:top-1/2 transform -translate-y-1/4 2xl:-translate-y-1/2">
							<h1 className="text-6xl text-primary-blue font-bold leading-tight">
								The Easiest <br /> Way to <span className="text-primary-green relative mx-3 z-10 circle">Pay</span> Your
								Employees &
							</h1>
							<div className="bg-primary-green py-4 text-4xl px-5 rounded-md mt-3 text-white font-semibold w-96 text-center">
								Recieve Paychecks
							</div>
							<p className="mt-8 text-primary-blue text-xl leading-relaxed pr-18">
								With our solution, employees can get immediate access to their earnings and free themselves from the
								stress of waiting for pay day.
							</p>
							<button className="mt-14 bg-primary-blue text-white py-3.5 px-10 text-lg font-semibold rounded-full">
								Schedule Demo
							</button>
						</div>
					</div>
					<div className="relative">
						<Image
							src="/images/banner.png"
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
