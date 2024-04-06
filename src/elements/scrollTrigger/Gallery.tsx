import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "../../pages/Landing/Header/Header.styles";
// import { useQuery } from "@tanstack/react-query";
// import axiosInstance from "../../services/api/axiosInstance";

const Gallery = ({ galleryData }) => {
  gsap.registerPlugin(ScrollTrigger);

  // const {
  //   data: galleryData,
  //   isLoading,
  //   isFetched,
  // } = useQuery({
  //   queryKey: [`images-van-Gogh`],
  //   queryFn: async () => {
  //     return await axiosInstance.get(`/artworks?fields=id,title,image_id`);
  //   },
  //   select: (res) => {
  //     return res.data;
  //   },
  // });
  useEffect(() => {
    {
      // const  size = Math.max(innerWidth, innerHeight);
      gsap.set(".gridBlock", {
        backgroundImage: (i) => `url(${galleryData[i].url})`,
      });

      const bigImg = new Image();
      bigImg.addEventListener("load", function () {
        gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
      });

      bigImg.src = `https://www.artic.edu/iiif/2/2193cdda-2691-2802-0776-145dee77f7ea/full/823,/0/default.jpg`;
    }
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // pin: ".grid",
          // anticipatePin: 1,
          // markers: true,
        },
      })
      .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
      .to(
        ".gridBlock:not(.centerBlock)",
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from(".gridLayer", {
        scale: 3.3333,
        ease: "none",
      });
  });
  return (
    <>
      <div className="grid-container">
        <div className="grid">
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer centerPiece">
            <div className="gridBlock centerBlock"></div>
          </div>

          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
