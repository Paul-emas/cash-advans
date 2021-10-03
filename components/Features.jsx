import MailIcon from '../public/assets/svgs/icon-3.svg';
import MicIcon from '../public/assets/svgs/icon-4.svg';
import NoteIcon from '../public/assets/svgs/icon-5.svg';
import FlameIcon from '../public/assets/svgs/icon-6.svg';

const Features = () => {
	return (
		<div className="min-h-screen bg-primary-gray">
			<div className="container mx-auto px-10">
				<div className="grid grid-cols-2 space-x-32 min-h-screen">
					<div className="h-full">
						<div className="center">
							<div className="flex space-x-5 2xl:space-x-16 mb-16">
								<div className="bg-white w-full h-64 rounded-2xl p-8">
									<MailIcon />
									<p className="text-xl 2xl:text-2xl mt-6 font-bold">Zero cost to your company</p>
								</div>
								<div className="bg-white w-full h-64 rounded-2xl p-8">
									<MicIcon />
									<p className="text-xl 2xl:text-2xl mt-6 font-bold">Integrates seamlessly with payroll</p>
								</div>
							</div>
							<div className="flex space-x-5 2xl:space-x-16">
								<div className="bg-white w-full h-64 rounded-2xl p-8">
									<NoteIcon />
									<p className="text-xl 2xl:text-2xl mt-6 font-bold">No impact on your cashflow</p>
								</div>
								<div className="bg-white w-full h-64 rounded-2xl p-8">
									<FlameIcon />
									<p className="text-xl 2xl:text-2xl mt-6 font-bold">Exposes you to no financial risk</p>
								</div>
							</div>
						</div>
					</div>
					<div className="h-full">
						<div className="center">
							<h1 className="text-6xl 2xl:max-w-2xl font-semibold leading-tight">Key features for employers</h1>
							<p className="mt-5 mb-10 max-w-lg text-xl text-primary-grey leading-relaxed">
								The very functions that help you in everyday life are already built into our messenger and are not just
								built in but invented anew.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
