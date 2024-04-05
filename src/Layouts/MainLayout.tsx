import Footer from "../elements/Footer/Footer";
import HeaderNavbar from "../elements/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="font-truculenta">
        <HeaderNavbar/>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
