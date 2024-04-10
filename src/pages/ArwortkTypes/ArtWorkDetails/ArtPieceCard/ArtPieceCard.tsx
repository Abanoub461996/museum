import moment from "moment";
import imageUrl from "../../../../services/imageUrl";
import { ArtPieceCardWrapper } from "./ArtPieceCard.styles";

const ArtPieceCard = ({pieceOfArt}) => {
  return (
    <ArtPieceCardWrapper>
      <img
        className="art__piece_img"
        src={imageUrl(pieceOfArt.image_id)}
        alt={pieceOfArt.title}
      />
      <div className="art__piece_details">

      <div className="art__piece_title font-lobster">{pieceOfArt.title}</div>
      <div className="art__piece_hint">{pieceOfArt.thumbnail.alt_text}</div>
      </div>

    </ArtPieceCardWrapper>
  );
};
export default ArtPieceCard;
