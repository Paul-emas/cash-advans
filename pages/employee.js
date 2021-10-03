import React from 'react';
import ContactEmployer from '../components/ContactEmployer';
import EmployeeHeader from '../components/EmployeeHeader';
import Footer from '../components/layout/Footer';
import Paid from '../components/Paid';
import Refer from '../components/Refer';

export default function employee() {
	return (
		<div>
			<EmployeeHeader />
			<Refer />
			<Paid />
			<ContactEmployer />
			<Footer />
		</div>
	);
}
