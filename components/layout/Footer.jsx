import Link from 'next/link';
import { useRouter } from 'next/router';

import Instagram from '../../public/assets/svgs/instagram.svg';
import FaceBook from '../../public/assets/svgs/facebook.svg';
import Twitter from '../../public/assets/svgs/twitter.svg';
import Youtube from '../../public/assets/svgs/youtube.svg';
import Subscribe from '../Subscribe';
import Contact from '../Contact';

const Footer = ({}) => {
	const router = useRouter();

	const routes = [
		{ name: 'Home', link: '/' },
		{ name: 'Employee', link: '/employee' },
		{ name: 'Employer', link: '/employer' },
		{ name: 'Contact', link: '/#contact' },
	];

	return (
		<div className="bg-primary-gray py-16 lg:py-24">
			<div className="container mx-auto space-y-14 px-10">
				<div className="mx-auto max-w-4xl text-center">{router.asPath === '/' && <Subscribe />}</div>
				<div className="mx-auto max-w-4xl text-center">{router.asPath === '/employer' && <Contact />}</div>
				<div className="flex flex-wrap justify-center mt-7 text-lg text-gray-500 font-medium items-center gap-y-5 gap-x-14">
					{routes.map(({ name, link }) => (
						<Link key={name} href={link}>
							<a>{name}</a>
						</Link>
					))}
				</div>
				<div className="flex justify-center gap-x-16">
					<a href="https://instagram.com/farfillhq?utm_medium=copy_link" target="_blank" rel="noreferrer">
						<Instagram className="h-7" />
					</a>
					<a href="https://www.facebook.com/FarfillHQ/" target="_blank" rel="noreferrer">
						<FaceBook className="h-7" />
					</a>
					<a href="https://twitter.com/farfillHQ?t=qs083QBN53lVHnyzKk4I0Q&s=09" target="_blank" rel="noreferrer">
						<Twitter className="h-7" />
					</a>
					<a href="https://youtube.com/channel/UCVd5YjZ-3e1s_1d5ibhA6IA" target="_blank" rel="noreferrer">
						<Youtube className="h-7" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
