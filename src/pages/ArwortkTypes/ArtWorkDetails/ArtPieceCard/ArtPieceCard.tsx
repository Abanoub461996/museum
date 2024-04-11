import moment from "moment";
import imageUrl from "../../../../services/imageUrl";
import { ArtPieceCardWrapper } from "./ArtPieceCard.styles";
import { useState } from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const ArtPieceCard = ({ pieceOfArt }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <ArtPieceCardWrapper
      $thumbnail={pieceOfArt.thumbnail}
      $color={pieceOfArt.color}
    >
      <img
        className="art__piece_img"
        src={imageUrl(pieceOfArt.image_id)}
        alt={pieceOfArt.title}
        onLoad={() => setImageLoaded(true)}
      />
      <div
        className={`art__img_skeleton animate-pulse ${
          imageLoaded ? "hidden" : ""
        } flex items-center justify-center w-full bg-gray-300`}
      >
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="art__piece_title font-lobster">{pieceOfArt.title}</div>
      <div className="art__piece_details">
        <div className="artpiece__flex">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              version="1.1"
              id="Capa_1"
              viewBox="0 0 612 612"
            >
              <g>
                <g>
                  <path d="M600.195,3.203c-27.612-27.612-229.2,129.21-343.928,243.94c-27.811,27.809-47.495,50.998-61.13,70.498    c18.725,5.797,36.292,16.375,51.568,31.655c6.546,6.546,12.677,13.948,18.225,21.996c8.543,12.401,14.531,25.428,18.065,38.877    c20.061-13.681,44.126-33.916,73.261-63.042C470.985,232.402,627.807,30.815,600.195,3.203z" />
                  <path d="M93.801,364.184c-105.658,61.408-10.941,144.218-85.2,218.472c53.607,53.611,138.564,26.071,185.785-21.154    c43.828-43.819,79.004-106.442,38.846-164.758C199.203,347.336,145.419,334.186,93.801,364.184z" />
                </g>
              </g>
            </svg>
            <div>{pieceOfArt.artist_title}</div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <BsFillCalendar2DateFill />
            <div>{pieceOfArt.date_display}</div>
          </div>
        </div>
        <div className="artpiece__flex">
          <div className="flex justify-center items-center gap-2">
            <FaLocationDot />
            <div>{pieceOfArt.place_of_origin}</div>
          </div>
        </div>
      </div>
    </ArtPieceCardWrapper>
  );
};
export default ArtPieceCard;
