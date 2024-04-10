import { useParams } from "react-router";
import { ArtWorkPageWrapper } from "./ArtWorkDetails.styles";
import axiosInstance from "../../../services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import ScrollReveal from "scrollreveal";
import imageUrl from "../../../services/imageUrl";
import { useEffect } from "react";
import ArtPieceCard from "./ArtPieceCard/ArtPieceCard";

const ArtWorkDetails = () => {
  const { id } = useParams();
  const {
    data: artWorkTypeEx,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: [`artwork-type-card-${id}`],
    queryFn: async () => {
      return await axiosInstance.get(
        `/artworks/search?query[term][artwork_type_id]=${id}&limit=12&fields=id,title,image_id,artwork_type_title,thumbnail,timestamp`
      );
    },
    select: (res) => {
      return res.data.data;
    },
    staleTime: Infinity,
  });
  useEffect(() => {
    // ScrollReveal().reveal(
    //   ".scroll_reveal_container .scroll_reveal_col .art__piece_card",
    //   {
    //     origin: "bottom",
    //     duration: 1000,
    //     delay: 150,
    //     distance: "100px",
    //     scale: 1,
    //     easing: "ease",
    //     reset: true,
    //   }
    // );
  });

  return (
    <ArtWorkPageWrapper>
      {!isLoading && (
        <>
          <div className="page__header">
            {artWorkTypeEx[0].artwork_type_title}s
          </div>

          <div className="scroll_reveal_container">
            <div className="scroll_reveal_col">
              {artWorkTypeEx.slice(0, 4).map((pieceOfArt) => {
                return (
                  <div className="art__piece_card">
                    <ArtPieceCard pieceOfArt={pieceOfArt} />
                  </div>
                );
              })}
            </div>
            <div className="scroll_reveal_col">
              {artWorkTypeEx.slice(4, 8).map((pieceOfArt) => {
                return (
                  <div className="art__piece_card">
                    <ArtPieceCard pieceOfArt={pieceOfArt} />
                  </div>
                );
              })}
            </div>
            <div className="scroll_reveal_col">
              {artWorkTypeEx.slice(8, 12).map((pieceOfArt) => {
                return (
                  <div className="art__piece_card">
                    <ArtPieceCard pieceOfArt={pieceOfArt} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </ArtWorkPageWrapper>
  );
};
export default ArtWorkDetails;
