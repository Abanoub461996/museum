import { useRef } from "react";
import axiosInstance from "../../services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// Styles
import { LandingPageWrapper } from "./Landing.styles";

const LandingPage = () => {
  const selectAll = (e) => document.querySelectorAll(e);

  const {
    data: galleryData,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: [`images-van-Gogh`],
    queryFn: async () => {
      return await axiosInstance.get(
        `/artworks/search?query[term][is_public_domain]=true&&limit=100&&fields=id,title,image_id,artist_display,artwork_type_title`
      );
    },
    select: (res) => {
      const uniqueArtworks = res.data.data.reduce((uniqueArtworks, el) => {
        // Check if an artwork with the same title already exists in the uniqueArtworks array
        const existingArtwork = uniqueArtworks.find(
          (artwork) => artwork.artwork_type_title === el.artwork_type_title
        );

        // If the artwork does not exist in the uniqueArtworks array, add it
        if (!existingArtwork) {
            console.log("adding");
            
          uniqueArtworks.push({
            ...el,
            url: `${res.data.config.iiif_url}/${el.image_id}/full/843,/0/default.jpg`,
          });
        }

        return uniqueArtworks;
      }, []);
      return uniqueArtworks;
    },
  });
  const stage = useRef<HTMLDivElement>(null);
  const slides = selectAll(".slide");
  const links = selectAll(".slide__scroll-link");
  const titles = selectAll(".col__content-title");

  function initHeader() {
    // animate the logo and fake burger button into place

    let tl = gsap.timeline({ delay: 0.5 });

    tl.from(".logo", {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });
  }

  function initIntro() {
    // animate the intro elements into place

    let tl = gsap.timeline({ delay: 1.2 });

    tl.from(".intro-slide", {
      // x: 100,
      y: 400,
      ease: "power4",
      duration: 3,
    })
      .from(
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

    let stl = gsap.timeline({
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

  function initSlides() {
    // Animation of each slide scrolling into view
    slides.forEach((slide, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "40% 50%", // position of trigger meets the scroller position
          toggleActions: "play reverse play reverse", // Animation plays when entering and reversing when leaving
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

    // External footer link scroll animation
    gsap.from(".footer__link", {
      scrollTrigger: {
        trigger: ".footer",
        scrub: 2,
        start: "50% 100%", // position of trigger meets the scroller position
        end: "0% 0%",
        toggleActions: "play reverse play reverse", // Animation plays when entering and reversing when leaving
      },
      y: "20vh",
      ease: "sine",
    });
  }
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.set(stage, { autoAlpha: 1 });
    initHeader();
    initIntro();
    initSlides();
  });

  return (
    <LandingPageWrapper>
      {isFetched && (
        <div id="smooth-wrapper">
          <div className="stage" id="smooth-content" ref={stage}>
            <header className="header">
              <div className="logo">MuseuM</div>
            </header>

            <section className="intro slide--0" id="slide-0">
              <div className="intro__content">
                <h1 className="intro__title">MuseuM</h1>
                <p className="intro__txt">
                  Duda is going from strength to strength. Whether it’s in the
                  prestigious gallery in the new World Trade Centre in New York
                  or at an international art fair in Chicago or Hong Kong,
                  people recognize the original response to life in Duda’s work,
                  and go away feeling animated and energized by his vibrant
                  creations.
                </p>
              </div>
              <img
                className="intro__img intro__img--1"
                src={galleryData[0].url}
              />
              <img
                className="intro__img intro__img--2"
                src={galleryData[7].url}
              />
            </section>

            <section className="slide slide--1" id="slide-1">
              <div className="col col--1">
                <div className="col__content col__content--1">
                  <h2 className="col__content-title">
                    <span className="line__inner">
                      {galleryData[1].artwork_type_title}
                    </span>
                  </h2>
                  <div className="col__content-wrap">
                    <p
                      className="col__content-txt"
                    ></p>
                    <a href="#" className="slide-link">
                      <div className="slide-link__circ"></div>
                      <div className="slide-link__line"></div>
                    </a>
                  </div>
                </div>
                <a href="#slide-2" className="slide__scroll-link">
                  <div className="slide__scroll-line"></div>
                </a>
              </div>
              <div className="col col--2">
                <div className="col__image-wrap">
                  <img className="img img--1" src={galleryData[1].url} />
                </div>
              </div>
            </section>
            <section className="slide slide--2" id="slide-2">
              <div className="col col--1">
                <div className="col__content col__content--2">
                  <h2 className="col__content-title">
                    <span className="line__inner">
                      {galleryData[2].artwork_type_title}
                    </span>
                  </h2>
                  <div className="col__content-wrap">
                    <p
                      className="col__content-txt"
                    ></p>
                    <a href="#" className="slide-link">
                      <div className="slide-link__circ"></div>
                      <div className="slide-link__line"></div>
                    </a>
                  </div>
                </div>
                <a href="#slide-3" className="slide__scroll-link">
                  <div className="slide__scroll-line"></div>
                </a>
              </div>
              <div className="col col--2">
                <div className="col__image-wrap">
                  <img className="img img--1" src={galleryData[2].url} />
                </div>
              </div>
            </section>
            <section className="slide slide--3" id="slide-3">
              <div className="col col--1">
                <div className="col__content col__content--3">
                  <h2 className="col__content-title">
                    {galleryData[3].artwork_type_title}
                  </h2>
                  <div className="col__content-wrap">
                    <p
                      className="col__content-txt"
                    ></p>
                    <a href="#" className="slide-link">
                      <div className="slide-link__circ"></div>
                      <div className="slide-link__line"></div>
                    </a>
                  </div>
                </div>
                <a href="#slide-7" className="slide__scroll-link">
                  <div className="slide__scroll-line"></div>
                </a>
              </div>
              <div className="col col--2">
                <div className="col__image-wrap">
                  <img className="img img--1" src={galleryData[3].url} />
                </div>
              </div>
            </section>

            <section className="slide slide--4" id="slide-4">
              <div className="col col--1">
                <div className="col__content col__content--4">
                  <h2 className="col__content-title">
                    <span className="line__inner">
                      {galleryData[4].artwork_type_title}
                    </span>
                  </h2>
                  <div className="col__content-wrap">
                    <p
                      className="col__content-txt"
                    ></p>
                    <a href="#" className="slide-link">
                      <div className="slide-link__circ"></div>
                      <div className="slide-link__line"></div>
                    </a>
                  </div>
                </div>
                <a href="#slide-4" className="slide__scroll-link">
                  <div className="slide__scroll-line"></div>
                </a>
              </div>
              <div className="col col--2">
                <div className="col__image-wrap">
                  <img className="img img--1" src={galleryData[4].url} />
                </div>
              </div>
            </section>

            <section className="slide slide--5" id="slide-5">
              <div className="col col--1">
                <div className="col__content col__content--5">
                  <h2 className="col__content-title">
                    <span className="line__inner">
                      {galleryData[5].artwork_type_title}
                    </span>
                  </h2>
                  <div className="col__content-wrap">
                    <p
                      className="col__content-txt"
                    ></p>
                    <a href="#" className="slide-link">
                      <div className="slide-link__circ"></div>
                      <div className="slide-link__line"></div>
                    </a>
                  </div>
                </div>
                <a href="#slide-5" className="slide__scroll-link">
                  <div className="slide__scroll-line"></div>
                </a>
              </div>
              <div className="col col--2">
                <div className="col__image-wrap">
                  <img className="img img--1" src={galleryData[5].url} />
                </div>
              </div>
            </section>

            <section className="slide slide--6" id="slide-6">
              <div className="col col--1">
                <div className="col__content col__content--6">
                  <h2 className="col__content-title">
                    {galleryData[6].artwork_type_title}
                  </h2>
                  <div className="col__content-wrap">
                    <p
                      className="col__content-txt"
                    ></p>
                    <a href="#" className="slide-link">
                      <div className="slide-link__circ"></div>
                      <div className="slide-link__line"></div>
                    </a>
                  </div>
                </div>
                <a href="#slide-6" className="slide__scroll-link">
                  <div className="slide__scroll-line"></div>
                </a>
              </div>
              <div className="col col--2">
                <div className="col__image-wrap">
                  <img className="img img--1" src={galleryData[6].url} />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </LandingPageWrapper>
  );
};
export default LandingPage;
