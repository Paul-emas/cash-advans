import Link from 'next/link';

export const Navbar = () => {
	return (
		<div className="py-3">
			<div className="flex justify-between items-center">
				<div className="text-2xl text-circular font-semibold text-primary-dark">
					Payslice <span className="text-primary-green">.</span>
				</div>
				<div className="flex items-center space-x-14">
					<Link href="/employee">
						<a className="text-black text-lg">Employee</a>
					</Link>
					<Link href="/employer">
						<a className="text-black text-lg">Employer</a>
					</Link>
					<Link href="/employer">
						<a className="text-black text-lg">Contact</a>
					</Link>
					<button className="bg-primary-green text-white py-3.5 px-10 text-lg font-semibold rounded-full">
						Try us out
					</button>
				</div>
			</div>
		</div>
	);
};
