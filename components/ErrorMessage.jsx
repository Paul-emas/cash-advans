import { ErrorMessage as HErrorMessage } from '@hookform/error-message';

const ErrorMessage = (props) => {
	return (
		<HErrorMessage
			{...props}
			render={({ message }) => (
				<div className="mb-2 text-sm md:text-base italic font-medium text-red-500 capitalize">{message}</div>
			)}
		/>
	);
};

export default ErrorMessage;
