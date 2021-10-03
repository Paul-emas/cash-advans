import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';

const Subscribe = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);

	return (
		<>
			<h1 className="text-4xl lg:text-6xl font-bold leading-snug text-gray-800">Join the Waiting List</h1>
			<p className="text-xl text-gray-400 mt-5">Be the first to know. Be the first to benefit.</p>
			<div className="flex space-x-10 mt-10">
				<div className="w-full">
					<FormInput type="email" label="name" placeholder="Email Address" {...register('name')} className="w-full" />
				</div>
				<button
					type="submit"
					disabled={loading}
					className="px-20 w-full lg:w-auto py-4 text-xl font-medium rounded-full text-white text-center bg-primary-blue"
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
		</>
	);
};

export default Subscribe;
