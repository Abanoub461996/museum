import { useParams } from "react-router";
import { ArtPieceDetailsWrapper } from "./ArtPieceDetails.styles";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/api/axiosInstance";
import { useState } from "react";
import imageUrl from "../../services/imageUrl";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const ArtPieceDetails = () => {
  const { id } = useParams();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const {
    data: pieceOfArt,
    isLoading,
    status,
  } = useQuery({
    queryKey: [`artwork-piece-details-${id}`],
    queryFn: async () => {
      return await axiosInstance.get(`/artworks/${id}`);
    },
    select: (res) => {
      console.log(res);

      return res.data.data;
    },
    staleTime: Infinity,
  });

  return (
    <ArtPieceDetailsWrapper>
      {!isLoading && (
        <>
          <img
            className="art__piece_img"
            src={imageUrl(pieceOfArt?.image_id)}
            alt={pieceOfArt?.title}
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
          <div className="page__content">
            <div className="piece_of_art__partition about_piece">
              <div>{pieceOfArt?.title}</div>
              <div
                className="artist__description"
                dangerouslySetInnerHTML={{
                  __html: pieceOfArt?.description,
                }}
              ></div>
            </div>
            <div className="piece_of_art__partition piece_artist">
              <div
                className="artist__description"
                dangerouslySetInnerHTML={{
                  __html: pieceOfArt?.artist_display,
                }}
              ></div>
            </div>
            <div className="piece_of_art__partition piece_origin">
              {pieceOfArt?.place_of_origin && (
                <div className="flex justify-center mb-1 items-center gap-2">
                  <FaLocationDot />
                  <div>{pieceOfArt?.place_of_origin}</div>
                </div>
              )}
              {pieceOfArt?.provenance_text && (
                <div
                  className="artist__description"
                  dangerouslySetInnerHTML={{
                    __html: pieceOfArt?.provenance_text,
                  }}
                ></div>
              )}
            </div>
            <div className="piece_of_art__partition piece_related_work">
              {pieceOfArt?.artwork_type_title && (
                <div className="flex justify-center mb-1 items-center gap-2">
                  <div>{pieceOfArt?.artwork_type_title}</div>
                </div>
              )}
              {!!pieceOfArt?.category_titles?.length && (
                <div className="flex justify-center mb-1 items-center gap-2">
                  {pieceOfArt?.category_titles.map((el, index) => {
                    return (
                      <div key={`category_titles-${[pieceOfArt.id]}-${index}`}>
                        {el}
                      </div>
                    );
                  })}
                </div>
              )}
              {!!pieceOfArt?.term_titles?.length && (
                <div className="flex justify-center mb-1 items-center gap-2">
                  {pieceOfArt?.term_titles.map((el, index) => {
                    return (
                      <div key={`term_titles-${[pieceOfArt.id]}-${index}`}>
                        {el}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </ArtPieceDetailsWrapper>
  );
};
export default ArtPieceDetails;
