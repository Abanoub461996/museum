import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { GalleryWrapper } from "./Gallery.styles";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  const urls = [
    "https://www.artic.edu/iiif/2/9365a024-75ce-75e9-756f-1c2c96eadec9/full/843,/0/default.jpg",
    "https://www.artic.edu/iiif/2/0675f9a9-1a7b-c90a-3bb6-7f7be2afb678/full/843,/0/default.jpg",
    "https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/843,/0/default.jpg",
    "https://www.artic.edu/iiif/2/2193cdda-2691-2802-0776-145dee77f7ea/full/823,/0/default.jpg",
    "https://www.artic.edu/iiif/2/93270aaf-16a5-1604-c6c8-0f3c003eb7a1/full/843,/0/default.jpg"
  ];

  useGSAP(() => {
    gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: ".grid",
          // anticipatePin: 1,
        },
      })
      .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
      .to(
        ".gridBlock:not(.centerBlock)",
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from(".gridLayer", {
        scale: 2,
        ease: "none",
      })
      .to(".gridLayer", {
        y: 0,
        ease: "none",
      });
  });
  return (
    <GalleryWrapper>
      <div className="grid-container">
        <div className="grid">
          {urls.map((url, i) => {
            return (
              <div className={`gridLayer ${i ? "" : "centerPiece"}`} key={i}>
                <img
                  className={`gridBlock ${i ? "" : "centerBlock"}`}
                  src={urls[i]}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </GalleryWrapper>
  );
};
export default Gallery;
