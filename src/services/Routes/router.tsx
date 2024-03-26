import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import LandingPage from "../../pages/Landing/Landing";

const router = createBrowserRouter([
  {
    path: "/museum/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [{ index: true, element: <LandingPage /> }],
  },
]);

export default router;
