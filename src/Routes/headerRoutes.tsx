import React from 'react';
import { RouteProps } from 'react-router-dom';
import { pagesMenu } from '../menu';
import Navbar from '../components/Navbar/Navbar';




const headers: RouteProps[] = [

	{ path: pagesMenu.page404.path, element: null },
	{ path: pagesMenu.login.path, element: null },
	{ path: pagesMenu.scan.path, element: null },
	{ path: pagesMenu.menu.path, element: null },
	{ path: pagesMenu.trackStatus.path, element: null },
	{
		path: pagesMenu.dashboard.path,
		element: <Navbar />,
	},
	{
		path: `*`,
		element: <Navbar />,
	},
];

export default headers;
