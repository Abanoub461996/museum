import { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// Styles
import { HeaderWrapper } from "./Header.styles";
import { useLocation, useNavigate } from "react-router";

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  function initHeader() {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(".logo", {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });
  }
  useGSAP(() => {
    initHeader();
  });
  const activePath = () => {};
  const goTo = (field) => {
    navigate(`/${field}`);
  };
  return (
    <HeaderWrapper>
      <div id="smooth-wrapper">
        <header className="header">
          <div className="logo font-lobster" onClick={() => goTo("")}>
            MuseuM
          </div>
          <div className="nav__items ">
            <div
              className={`nav_item ${
                location.includes("artwork_types") ? "active" : ""
              }`}
              onClick={() => goTo("artwork_types")}
            >
              ArtWork Types
            </div>
            <div
              className={`nav_item ${
                location.includes("artists") ? "active" : ""
              }`}
              onClick={() => goTo("artists")}
            >
              Artists
            </div>
            <div
              className={`nav_item ${
                location.includes("categories") ? "active" : ""
              }`}
              onClick={() => goTo("categories")}
            >
              Categories
            </div>
          </div>
        </header>
      </div>
    </HeaderWrapper>
  );
};
export default HeaderNavbar;
