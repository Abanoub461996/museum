import { ToastContainer } from "react-toastify";
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { HashRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LandingPageWrapper from "./pages/Landing/LandingPageWrapper";
import ArtistsList from "./pages/Artists/ArtistsList";
import ArtistWork from "./pages/Artists/ArtistWork/ArtistWork";
import TypesList from "./pages/Types/TypesList";
import ArtWorkDetails from "./pages/Types/ArtWorkDetails/ArtWorkDetails";
import ArtPieceDetails from "./pages/ArtPieceDetails/ArtPieceDetails";
function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
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
              <Route index={true} element={<TypesList />} />
              <Route path=":id" element={<ArtWorkDetails />} />
            </Route>
            <Route path="artists" element={<Outlet />}>
              <Route index={true} element={<ArtistsList />} />
              <Route path=":id" element={<ArtistWork />} />
            </Route>
            <Route path="artwork_piece" element={<Outlet />}>
              {/* <Route index={true} element={<ArtistsList />} /> */}
              <Route path=":id" element={<ArtPieceDetails />} />
            </Route>
            <Route path="categories" element={<Outlet />}>
              <Route index={true} element={<TypesList />} />
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
