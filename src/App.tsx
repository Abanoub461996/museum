import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./services/Routes/router";
import { Outlet, Route, RouterProvider, Routes } from "react-router";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LandingPageWrapper from "./pages/Landing/LandingPageWrapper";
import ArtowrkTypes from "./pages/ArwortkTypes/Index/ArtowrkTypes";
import ArtWorkDetails from "./pages/ArwortkTypes/ArtWorkDetails/ArtWorkDetails";
import ArtistsList from "./pages/Artists/ArtistsList";
import ArtistWork from "./pages/Artists/ArtistWork/ArtistWork";
function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          {/* <RouterProvider router={router} /> */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          >
            <Route index={true} element={<LandingPageWrapper />} />
            <Route path="artwork_types" element={<Outlet />}>
              <Route index={true} element={<ArtowrkTypes />} />
              <Route path=":id" element={<ArtWorkDetails />} />
            </Route>
            <Route path="artists" element={<Outlet />}>
              <Route index={true} element={<ArtistsList />} />
              <Route path=":id" element={<ArtistWork />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
      <ToastContainer limit={3} />
    </>
  );
}

export default App;
