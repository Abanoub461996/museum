import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextWrapper } from "./LandingText.styles";

const LandingText = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".text_wrapper",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          anticipatePin: 1,
          // markers: true,
          toggleActions: "play reverse",
        },
        easing: "easeOutExpo",
      })
      .fromTo(
        ".space__resizing__text",
        { letterSpacing: "12px" },
        { letterSpacing: 0 }
      )
      .fromTo(
        ".scale__resizing__text",
        { fontSize: "10px" },
        { fontSize: "25px" },
        ">"
      );

    // gsap.utils.toArray(".artwork_type").forEach((layer: any) => {
    //   const randomY = gsap.utils.random(0, 10); // generates a random number between -10 and 10

    //   gsap
    //     .fromTo(
    //       layer,
    //       {  scale:1 },
    //       {
    //         scale:1.3,
    //         yoyo: true,
    //         repeat: -1,
    //         duration: 5,
    //         ease: "power3",
    //       }
    //     )
    // });
  });

  return (
    <TextWrapper>
      <div className="text_wrapper">
        <div className="space__resizing__text font-lobster">
          Explore a curated collection of
          <br />
          diverse artworks spanning various <br /> art forms at our{" "}
          <b>MuseuM</b>.
        </div>
        <div className="scale__resizing__text font-truculenta">
          Immerse yourself in the rich tapestry of artistic expression <br /> as
          you journey through captivating exhibits,
          <br /> showcasing masterpieces from renowned artists across the ages.
          <br /> Experience the beauty and depth of human creativity firsthand.
          {/* <div className="artwork_type artwork_type__1 font-lobster">
            Paintings.
          </div>
          <div className="artwork_type artwork_type__2 font-lobster">
            Sculptures.
          </div>
          <div className="artwork_type artwork_type__3 font-lobster">
            Architectural fragment.
          </div>
          <div className="artwork_type artwork_type__4 font-lobster">
            Print.
          </div>
          <div className="artwork_type artwork_type__5 font-lobster">
            Drawing and Watercolor.
          </div>
          <div className="artwork_type artwork_type__6 font-lobster">
            Costume and Accessories.
          </div> */}
        </div>
      </div>
    </TextWrapper>
  );
};
export default LandingText;
