import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ParallaxSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // gsap.to(".pContent", {
    //   yPercent: -100,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".pSection",
    //     start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // gsap.to(".pImage", {
    //   yPercent: 50,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".pSection",
    //     // start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,

    //   },
    // });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pImage",
        start: "top center", // the default values
        // end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
    tl.addLabel("start")
      .to(".pContent", { yPercent: -10 })
      .to(".pImage", { yPercent: 25 }, "<")
      .addLabel("end");
  });

  return (
    <>
      <section className="pSection">
        <div className="container">
          <div className="pContent">
            <p>
              This is a super simple example of how to create a basic parallax
              effect using GSAP's ScrollTrigger!
            </p>
            <p>
              This one is modified to use timeline instead of just using
              gsap.to(), to animate the green box and the image relatively.
            </p>
          </div>
        </div>

        <img
          className="pImage"
          src="https://picsum.photos/1200/526?random=1"
          alt="Filler image"
        />
      </section>
    </>
  );
};
export default ParallaxSection;
