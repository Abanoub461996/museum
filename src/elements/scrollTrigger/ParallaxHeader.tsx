import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ParallaxHeader = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true, // pin the element while the ScrollTrigger is active
    pinSpacing: false, // don't add or remove spacing when pinning/unpinning
        // markers: true,
      },
    });

    gsap.utils.toArray(".parallax").forEach((layer: any) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: movement, ease: "none" }, 0);
    });
  });

  return (
    <>
      <div id="hero">
        <div className="layer-bg layer parallax" data-depth="0.10"></div>
        <div className="layer-1 layer parallax" data-depth="0.20"></div>
        <div className="layer-2 layer parallax" data-depth="0.50"></div>
        <div className="layer-3 layer parallax" data-depth="0.80"></div>
        <div className="layer-overlay layer parallax" data-depth="0.85"></div>
        <div className="layer-4 layer parallax" data-depth="1.00"></div>
      </div>

      <div id="content">
        <div className="container mx-auto">
          <section className="first-section">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 px-4">
                <h1>This is the Parallax Feature in GSAP</h1>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 p-4">
                <p>
                  It depends on many layer of elements each has its own depth
                  level and the movement of all elements on scroll is relative
                  to its depth
                </p>
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <p>
                  The feature comes from the powerfull module of scroll trigger
                  from GSAP library. using also TimeLine property and gsap utils.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default ParallaxHeader;
