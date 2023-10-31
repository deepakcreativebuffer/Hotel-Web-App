import React, { lazy } from "react";
import { pagesMenu } from "../menu";

const AUTH = {
  PAGE_404: lazy(() => import("../pages/customer/presentation/auth/Page404")),
  LOGIN: lazy(() => import("../pages/customer/presentation/auth/Login")),
  SIGNUP: lazy(() => import("../pages/customer/presentation/auth/Signup")),
};

const BOARDING = {
  SPLASH: lazy(
    () =>
      import(
        "../pages/customer/presentation/boarding/splashScreen/SplashScreen"
      )
  ),
  QRSCREEN: lazy(
    () => import("../pages/customer/presentation/boarding/QRScreen/QRScreen")
  ),
  MENU: lazy(() => import("../pages/customer/presentation/boarding/Menu/Menu")),
};

const TRACKORDER = {
  CONTACT: lazy(
    () => import("../pages/customer/presentation/trackOrder/Contact/Contact")
  ),
  TRACKINGSTATUS: lazy(
    () =>
      import(
        "../pages/customer/presentation/trackOrder/TrackStatus/TrackStatus"
      )
  ),
};

const LANDING = {
  DASHBOARD: lazy(
    () => import("../pages/customer/presentation/home/DashboardPage")
  ),
};

const PAGE = {
  CART: lazy(() => import("../pages/customer/presentation/cart/Cart")),
};

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
   * Boarding Page
   */
  {
    path: pagesMenu.splash.path,
    element: <BOARDING.SPLASH />,
  },
  {
    path: pagesMenu.scan.path,
    element: <BOARDING.QRSCREEN />,
  },

  {
    path: pagesMenu.menu.path,
    element: <BOARDING.MENU />,
  },

  {
    path: pagesMenu.menu.path,
    element: <BOARDING.MENU />,
  },

  /**
   * Track Order Page
   */
  {
    path: pagesMenu.contact.path,
    element: <TRACKORDER.CONTACT />,
  },
  {
    path: pagesMenu.trackStatus.path,
    element: <TRACKORDER.TRACKINGSTATUS />,
  },

  /**
   * Dashboard Page
   */
  {
    path: pagesMenu.dashboard.path,
    element: <LANDING.DASHBOARD />,
  },
  {
    path: pagesMenu.cart.path,
    element: <PAGE.CART />,
  },
];

const contents = [...presentation];

export default contents;
