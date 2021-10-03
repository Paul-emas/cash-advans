import Head from 'next/head';
import { Employees } from '../components/Employees';
import FAQs from '../components/FAQs';
import { Header } from '../components/Header';
import Footer from '../components/layout/Footer';
import { Workforce } from '../components/Workforce';

export default function Home() {
	return (
		<div>
			<Header />
			<Employees />
			<Workforce />
			<FAQs />
			<Footer />
		</div>
	);
}
