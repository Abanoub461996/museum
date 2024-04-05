import { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// Styles
import { HeaderWrapper } from "./Header.styles";

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  function initIntro() {
    // animate the intro elements into place

    const tl = gsap.timeline({ delay: 1.2 });

    tl.from(
      ".intro__title",
      {
        x: -100,
        opacity: 0,
        ease: "power4",
        duration: 3,
      },
      0.7
    )
      .from(
        ".intro__img--1",
        {
          y: 50,
          opacity: 0,
          ease: "power2",
          duration: 10,
        },
        1
      )
      .from(
        ".intro__img--2",
        {
          y: -50,
          opacity: 0,
          ease: "power2",
          duration: 10,
        },
        1
      );

    // set up scrollTrigger animation for the when the intro scrolls out

    const stl = gsap.timeline({
      delay: 1.2,
      scrollTrigger: {
        trigger: ".intro",
        scrub: 1,
        start: "top top", // position of trigger meets the scroller position
        end: "bottom top",
        toggleActions:"play reverse",
      },
    });

    stl
      .to(
        ".intro__img--1",
        {
          y: 50,
          ease: "power2",
        }
        // 1
      )
      .to(
        ".intro__img--2",
        {
          y: -100,
          ease: "power2",
        }
        // 1
      );
  }

  const stage = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    initIntro();
  });
  return (
    <HeaderWrapper>
      <div id="smooth-wrapper">
        <div className="stage" id="smooth-content" ref={stage}>
          <section className="intro slide--0" id="slide-0">
            <div className="intro__content">
              <h1 className="intro__title font-lobster">MuseuM</h1>
            </div>
            <img className="intro__img intro__img--1" src="https://www.artic.edu/iiif/2/cb34b0a8-bc51-d063-aab1-47c7debf3a7b/full/843,/0/default.jpg" />
            <img className="intro__img intro__img--2" src="https://www.artic.edu/iiif/2/d812e25d-5d00-cb04-f973-c5eaf671d540/full/843,/0/default.jpg" />
          </section>
        </div>
      </div>
    </HeaderWrapper>
  );
};
export default LandingPage;
