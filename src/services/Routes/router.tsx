import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import LandingPageWrapper from "../../pages/Landing/LandingPageWrapper";
import ArtowrkTypes from "../../pages/ArwortkTypes/Index/ArtowrkTypes";
import ArtWorkDetails from "../../pages/ArwortkTypes/ArtWorkDetails/ArtWorkDetails";

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
        path: "artwork_types",
        element: <Outlet />,
        children: [
          { index: true, element: <ArtowrkTypes /> },
          { path: ":id", element: <ArtWorkDetails /> },
        ],
      },
      {
        path: "artists",
        element: <Outlet />,
        children: [{ path: ":id", element: <LandingPageWrapper /> }],
      },
      {
        path: "categories",
        element: <Outlet />,
        children: [{ path: ":id", element: <LandingPageWrapper /> }],
      },
    ],
  },
]);

export default router;
