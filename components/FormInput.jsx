import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const FormInput = forwardRef(({ as, type, label, children, className, placeholder, ...props }, ref) => {
	const As = as;

	return (
		<div className="flex flex-col-reverse">
			<As
				name={label}
				type={type}
				autoComplete="off"
				placeholder={placeholder}
				ref={ref}
				className={`${
					type === 'textarea' ? 'pt-4 pb-56' : 'py-3 lg:py-4'
				} ${className} bg-white outline-none rounded-xl w-full focus:border-primary text-md lg:text-xl border-2 border-transparent px-7`}
				{...props}
			/>
			{children}
		</div>
	);
});

FormInput.defaultProps = {
	type: 'text',
	as: 'input',
};

export default FormInput;
