import React, { lazy } from 'react';
import {pagesMenu }from "../menu"


const AUTH = {
	PAGE_404: lazy(() => import('../pages/customer/presentation/auth/Page404')),
    LOGIN: lazy(()=>import('../pages/customer/presentation/auth/Login')),
    SIGNUP: lazy(()=>import('../pages/customer/presentation/auth/Signup'))
};

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/customer/presentation/home/DashboardPage')),
};

const PAGE ={
	INSIDENTS: lazy(() => import('../pages/customer/presentation/cart/Insidents')),

}

export const presentation = [
	/**
	 * Auth Page
	 */
	{
		path: pagesMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},

	{
		path: pagesMenu.login.path,
		element: <AUTH.LOGIN />,
	},

	{
		path: pagesMenu.signUp.path,
		element: <AUTH.SIGNUP />,
	},

	/**
	 * Dashboard Page
	 */
	{
		path: pagesMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},
	{
		path: pagesMenu.insidents.path,
		element: <PAGE.INSIDENTS />,
	}

]

const contents = [...presentation
];

export default contents;