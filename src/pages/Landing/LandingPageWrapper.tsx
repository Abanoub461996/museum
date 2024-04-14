import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/api/axiosInstance";
import LandingPage from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import LandingText from "./LandingText/LandingText";

const LandingPageWrapper = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[50vh] w-full text-[40px] font-lobster">Under Constrution
        {/* <LandingPage
          />
          <LandingText />
          <Gallery /> */}
      </div>
    </>
  );
};

export default LandingPageWrapper;
