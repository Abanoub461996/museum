import { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// Styles
import { LandingPageWrapper } from "./Landing.styles";
import { Link } from "react-router-dom";

const LandingPage = ({ galleryData,introData }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const selectAll = (e) => document.querySelectorAll(e);

  function initHeader() {
    // animate the logo and fake burger button into place

    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(".logo", {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });
  }

  function initIntro() {
    // animate the intro elements into place

    const tl = gsap.timeline({ delay: 1.2 });

    tl.from(
      ".intro__txt",
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
          // x: -50,
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
          // x: 50,
          y: -50,
          opacity: 0,
          ease: "power2",
          duration: 10,
        },
        1
      );

    // set up scrollTrigger animation for the when the intro scrolls out

    const stl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        scrub: 1,
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
      },
    });

    stl
      .to(".intro__title", {
        x: 400,
        ease: "power4.in",
        duration: 3,
      })
      .to(
        ".intro__txt",
        {
          y: 100,
          ease: "power4.in",
          duration: 3,
        },
        0
      );
  }

  function initSlides(slides) {
    // Animation of each slide scrolling into view
    slides.forEach((slide) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "10% 50%", // position of trigger meets the scroller position
          toggleActions: "play reverse play reverse", // Animation plays when entering and reversing when leaving
          markers:true
        },
      });

      tl.from(slide.querySelectorAll(".col__content-title"), {
        ease: "power4",
        y: "+=5vh",
        duration: 2.5,
      })
        .from(
          slide.querySelectorAll(".line__inner"),
          {
            y: 200,
            duration: 2,
            ease: "power4",
            stagger: 0.1,
          },
          0
        )
        .from(
          slide.querySelectorAll(".col__content-txt"),
          {
            x: 100,
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power4",
          },
          0.4
        )
        .from(
          slide.querySelectorAll(".slide-link"),
          {
            x: -100,
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power4",
          },
          0.3
        )
        .from(
          slide.querySelectorAll(".slide__scroll-link"),
          {
            y: 200,
            duration: 3,
            ease: "power4",
          },
          0.4
        )
        .to(
          slide.querySelectorAll(".slide__scroll-line"),
          {
            scaleY: 0.6,
            transformOrigin: "bottom left",
            duration: 2.5,
            ease: "elastic(1,0.5)",
          },
          1.4
        );
    });
  }
  const stage = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const slides = selectAll(".slide");
    // gsap.set(stage, { autoAlpha: 1 });
    initHeader();
    initIntro();
    initSlides(slides);
  });
  return (
    <LandingPageWrapper>
      <div id="smooth-wrapper">
        <div className="stage" id="smooth-content" ref={stage}>
          <header className="header">
            <div className="logo font-lobster">MuseuM</div>
          </header>

          <section className="intro slide--0" id="slide-0">
            <div className="intro__content">
              <h1 className="intro__title font-lobster">MuseuM</h1>
              <p className="intro__txt font-paintings">
                Duda is going from strength to strength. Whether it’s in the
                prestigious gallery in the new World Trade Centre in New York or
                at an international art fair in Chicago or Hong Kong, people
                recognize the original response to life in Duda’s work, and go
                away feeling animated and energized by his vibrant creations.
              </p>
            </div>
            <img
              className="intro__img intro__img--1"
              src={introData[1].url}
            />
            <img
              className="intro__img intro__img--2"
              src={introData[0].url}
            />
          </section>
          {galleryData.map((artPiece, i) => {
            return i % 2 ? (
              <section
                className={`slide slide--${i + 1}`}
                id={`slide--${i + 1}`}
                key={galleryData[i].artwork_type_id}
              >
                <div className="col w-[50%] col--1">
                  <div className="col__image-wrap">
                    <img className="img img--1" src={galleryData[i].url} />
                  </div>
                  <a href="#slide-2" className="slide__scroll-link">
                    <div className="slide__scroll-line" />
                  </a>
                </div>
                <div className="col w-[50%] col--2">
                  <div className="col__content col__content--1">
                    <h2 className="col__content-title">
                      <span className="line__inner">
                        {galleryData[i].artwork_type_title}s
                      </span>
                    </h2>
                    <div className="col__content-wrap">
                      <p className="col__content-txt"></p>
                      <Link
                        to={`artwork_type/${galleryData[i].artwork_type_id}`}
                        className="slide-link"
                      >
                        <div className="slide-link__circ" />
                        <div className="slide-link__line"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section
                className={`slide slide--${i + 1}`}
                id={`slide--${i + 1}`}
                key={galleryData[i].artwork_type_id}
              >
                <div className="col w-[50%] col--1">
                  <div className="col__content col__content--2">
                    <h2 className="col__content-title">
                      <span className="line__inner">
                        {galleryData[i].artwork_type_title}s
                      </span>
                    </h2>
                    <div className="col__content-wrap">
                      <p className="col__content-txt"></p>
                      <Link
                        to={`artwork_type/${galleryData[i].artwork_type_id}`}
                        className="slide-link"
                      >
                        <div className="slide-link__circ"></div>
                        <div className="slide-link__line"></div>
                      </Link>
                    </div>
                  </div>
                  <a href="#slide-3" className="slide__scroll-link">
                    <div className="slide__scroll-line"></div>
                  </a>
                </div>
                <div className="col w-[50%] col--2">
                  <div className="col__image-wrap">
                    <img className="img img--1" src={galleryData[i].url} />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </LandingPageWrapper>
  );
};
export default LandingPage;
