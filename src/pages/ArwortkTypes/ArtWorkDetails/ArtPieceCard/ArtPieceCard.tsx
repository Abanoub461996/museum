import moment from "moment";
import imageUrl from "../../../../services/imageUrl";
import { ArtPieceCardWrapper } from "./ArtPieceCard.styles";
import { useState } from "react";

const ArtPieceCard = ({ pieceOfArt }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <ArtPieceCardWrapper className={`${imageLoaded ? "" : "hidden"}`}>
      <img
        className="art__piece_img"
        src={imageUrl(pieceOfArt.image_id)}
        alt={pieceOfArt.title}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="art__piece_details">
        <div className="art__piece_title font-lobster">{pieceOfArt.title}</div>
        <div className="art__piece_hint">{pieceOfArt.thumbnail?.alt_text}</div>
        <div className="flex justify-between">
          <div className="art__piece_artist">{pieceOfArt.artist_title}</div>
          <div className="art__piece_date">{pieceOfArt.date_display}</div>
        </div>
      </div>
    </ArtPieceCardWrapper>
  );
};
export default ArtPieceCard;
