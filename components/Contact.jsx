import { useForm } from 'react-hook-form';
import isEmail from 'is-email';
import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import FormInput from './FormInput';

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {};

	return (
		<>
			<h1 className="text-4xl lg:text-6xl font-bold leading-snug text-gray-800">Get in touch</h1>
			<p className="text-xl text-gray-400 mt-5">Be the first to know. Be the first to benefit.</p>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-10">
				<div className="grid lg:grid-cols-2 gap-x-16 gap-y-5 lg:gap-y-10">
					<FormInput
						type="text"
						label="name"
						placeholder="Your name"
						{...register('name', {
							required: 'Please enter your full name',
						})}
					>
						<ErrorMessage errors={errors} name="name" />
					</FormInput>
					<FormInput
						type="email"
						label="email"
						placeholder="Email address"
						{...register('email', {
							required: 'Enter your email address',
							validate: (value) => isEmail(value) || 'Please give us a valid email address!',
						})}
						errors={errors}
					>
						<ErrorMessage errors={errors} name="email" />
					</FormInput>
					<FormInput
						type="text"
						label="name"
						placeholder="Company Email"
						{...register('name', {
							required: 'Please enter your full name',
						})}
					>
						<ErrorMessage errors={errors} name="name" />
					</FormInput>
					<FormInput
						type="email"
						label="email"
						placeholder="Company Name"
						{...register('email', {
							required: 'Enter your email address',
							validate: (value) => isEmail(value) || 'Please give us a valid email address!',
						})}
						errors={errors}
					>
						<ErrorMessage errors={errors} name="email" />
					</FormInput>
					<div className="lg:col-span-2">
						<FormInput
							as="textarea"
							type="textarea"
							label="message"
							placeholder="Message"
							{...register('message', {
								required: 'You missed this field',
							})}
						>
							<ErrorMessage errors={errors} name="message" />
						</FormInput>
					</div>
				</div>
				<div className="lg:flex mt-6 lg:mt-12">
					<button
						type="submit"
						disabled={loading}
						className="px-20 w-full py-3.5 h-14 text-md rounded-full text-white text-center bg-primary-blue"
					>
						{loading ? (
							<div className="flex justify-center">
								<div className="loader mx-1 md:mx-3 xl:mx-5"></div>
							</div>
						) : (
							<span>Submit</span>
						)}
					</button>
				</div>
			</form>
		</>
	);
};

export default Contact;
