import { useSelector } from "react-redux";
import Footer from "../elements/Footer/Footer";
import HeaderNavbar from "../elements/Header/Header";
import Loader, { LoaderType } from "../elements/Loader/Loader";
import { getLoader } from "../services/store/slices/loaderSlice";

const MainLayout = ({ children }) => {
  const loader = useSelector(getLoader);
  return (
    <>
      {loader ? (
        <Loader type={LoaderType.fake} />
      ) : (
        <div className="font-truculenta">
          <HeaderNavbar />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
