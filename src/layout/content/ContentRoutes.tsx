import React, { lazy,useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import contents from '../../Routes/mainRoutes';
// import ResetPasswordPage from '../../pages/presentation/auth/ResetPasswordPage';
import Navbar from '../../components/Navbar/Navbar'
import HeaderRoutes from './HeaderRoutes';
const PAGE_404 = lazy(() => import('../../pages/customer/presentation/auth/Page404'));
const ContentRoutes = () => {
	// const [navVisible, showNavbar] = useState(true);
	return (<>
			<HeaderRoutes/>
		<Routes>
			{contents.map((page) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Route  key={page.path} {...page} />
				))}
			<Route path='*' element={<PAGE_404 />} />
		</Routes>
				</>
	);
};

export default ContentRoutes;
