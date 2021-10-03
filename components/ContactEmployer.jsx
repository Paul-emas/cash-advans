import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CheckIcon from '../public/assets/svgs/check.svg';
import FormInput from './FormInput';

const ContactEmployer = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);

	return (
		<div className="py-24 bg-primary-gray">
			<div className="container mx-auto px-10">
				<h1 className="text-4xl lg:text-6xl font-bold leading-snug text-gray-800">Refer your employer</h1>
				<p className="text-xl text-gray-400 mt-5">you can choose to remain anonymous</p>
				<div className="grid grid-cols-2 space-x-10 mt-16">
					<div className="max-w-lg">
						<FormInput
							type="text"
							name="company_name"
							placeholder="Your Company Name"
							{...register('company_name')}
							className="w-full mb-8"
						/>
						<FormInput
							type="text"
							name="hr_contact_name"
							placeholder="HR Contact Name"
							{...register('hr_contact_name')}
							className="w-full mb-8"
						/>
						<FormInput
							type="email"
							name="hr_contact_email"
							placeholder="HR Contact Email"
							{...register('hr_contact_email')}
							className="w-full mb-8"
						/>
						<FormInput
							type="email"
							name="email"
							placeholder="Your Email"
							{...register('email')}
							className="w-full mb-8"
						/>
						<FormInput type="text" name="name" placeholder="Your Name" {...register('name')} className="w-full mb-8" />
						<div className="flex max-w-md mx-5">
							<label className="flex space-x-5 items-center">
								<input type="checkbox" checked className="form-checkbox rounded-sm" />
								<span className="text-sm text-gray-400">
									By ticking this box you agree to us sharing your details with your employer. Leave this box unticked
									if you want to remain anonymous
								</span>
							</label>
						</div>
						<div>
							<button
								type="submit"
								disabled={loading}
								className="px-20 w-full py-4 text-xl font-medium rounded-full text-white text-center bg-primary-blue mt-8"
							>
								{loading ? (
									<div className="flex justify-center">
										<div className="loader mx-1 md:mx-3 xl:mx-5"></div>
									</div>
								) : (
									<span>Subscribe</span>
								)}
							</button>
						</div>
					</div>
					<div>
						<div className="flex mb-7">
							<div>
								<CheckIcon></CheckIcon>
							</div>
							<p className="font-medium text-2xl ml-6 items-center max-w-lg">It’s free for your employer.</p>
						</div>
						<div className="flex mb-7">
							<div>
								<CheckIcon></CheckIcon>
							</div>
							<p className="font-medium text-2xl ml-6 items-center max-w-lg">
								It’s a voluntary benefit so each employee can choose whether to use it or not.
							</p>
						</div>
						<div className="flex mb-7">
							<div>
								<CheckIcon></CheckIcon>
							</div>
							<p className="font-medium text-2xl ml-6 items-center max-w-lg">
								If your employer does not offer Payslice and you would like them to, just fill out this form.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactEmployer;
