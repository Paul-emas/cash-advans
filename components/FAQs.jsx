import Accordion from './Accordion';

const FAQs = () => {
	const questions = [
		{
			question: 'Is this a loan or credit?',
			ans: "Nope! Payslice gives you access to money you've already earned but is still with your employer. You can transfer your money to your bank account when you need or want it, giving you more control over your finances without resorting to credit cards, overdrafts, or payday loans.",
		},
		{
			question: 'How is Payslice connected to my employer?',
			ans: 'We work with your employer to offer on-demand pay and make processing salary deductions during payroll simple. Only the authorised payroll processor has access to information about specific pay advances. Other specific people in the organisation may also be given access to a secure portal showing aggregated analytics and insights. This will help your employer understand overall employee engagement with Payslice.',
		},
		{
			question: 'Does Payslice  affect my credit score or credit file?',
			ans: 'There is no impact on your credit score from using early pay access with Payslice. Whilst we do use your bank account information to get an accurate, up-to-date financial situation, this leaves no trace on your credit file.',
		},
		{
			question: 'What are the benefits of using Payslice as an employee?',
			ans: 'Take a major step in revitalising your financial health by joining the early pay access revolution. Some of the main benefits include:',
			list: [
				"Easier money management. Life expenses don't always align with your employer's monthly pay cycle. Transfer your pay to access your money on your schedule.",
				"Handle life's bumps in the road. Be ready for unplanned expenses. Get a pay advance to see you through.",
				'Pay loans off earlier. Save on the interest mounting up on loans or cards by paying them off earlier in the month.Start good saving habits. Take out a pay advance and stash it away. Become the saver you always wanted to be.',
			],
		},
		{
			question: 'Does my employer have to be a partner of Payslice for me to be able to use it?',
			ans: "Yes, your employer needs to be signed up with us and offering Payslice as a benefit to you. However, you can anonymously refer your employer and we'll contact them to see if they are interested in making access to pay fair and flexible.",
		},
		{
			question: 'Is Payslice CBN-regulated?',
			ans: "Currently we offer Employer Salary Advances, which are not deemed to be a regulated product as there is no credit or loan agreement with the employee. If you'd like more information, please contact us.",
		},
	];

	return (
		<div id="faq" className="py-10 lg:py-32 bg-primary-gray">
			<div className="container mx-auto px-5 lg:px-10 mt-16">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-4xl lg:text-6xl font-bold leading-snug text-gray-800">Frequently asked questions</h1>
				</div>
				<div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 mt-16">
					{questions.map((question, index) => (
						<Accordion {...question} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQs;
