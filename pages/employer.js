import Benefits from '../components/Benefits';
import EmployerHeader from '../components/EmployerHeader';
import Features from '../components/Features';
import Footer from '../components/layout/Footer';
import Productivity from '../components/Productivity';

export default function employer() {
	return (
		<div>
			<EmployerHeader />
			<Productivity />
			<Benefits />
			<Features />
			<Footer />
		</div>
	);
}
