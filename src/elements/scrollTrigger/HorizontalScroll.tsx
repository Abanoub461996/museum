import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HorizontalScroll() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(".massiveImage", {
      backgroundImage: `url(https://source.unsplash.com/random/${
        innerWidth * 3
      }x${innerHeight})`,
    });
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".massiveImage",
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: () => innerWidth * 3, // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        anticipatePin: 1,
          // markers: true,
      },
    });

    tl.addLabel("start")
      .to(".massiveImage", { x: -innerWidth * 3, ease: "none" })
      .addLabel("end");
  }); // <-- scope for selector text (optional)

  return (
    <div className="min-w-full">
      <div className="massiveImage"></div>
    </div>
  );
}

export default HorizontalScroll;
