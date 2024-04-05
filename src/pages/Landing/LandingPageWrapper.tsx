import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/api/axiosInstance";
import LandingPage from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import LandingText from "./LandingText/LandingText";

const LandingPageWrapper = () => {

  return (
    <>
        <>
          <LandingPage
          />
          <LandingText />
          <Gallery />
        </>
    </>
  );
};

export default LandingPageWrapper;
