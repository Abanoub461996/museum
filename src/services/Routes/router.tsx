import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import LandingPageWrapper from "../../pages/Landing/LandingPageWrapper";

const router = createBrowserRouter([
  {
    path: "/museum/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { index: true, element: <LandingPageWrapper /> },
      {
        path: "artwork_type",
        element: <Outlet />,
        children: [
          { path: ":id", element: <LandingPageWrapper /> },
        ],
      },
    ],
  },
]);

export default router;
