import { useNavigate } from "react-router";
import { ArtistCardWrapper } from "./ArtistCard.styles";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();
  const goTo = (id: string) => {
    navigate(`${id}`);
  };
  return (
    <ArtistCardWrapper $image={artist.image_url}>
      <div className="artist__details_overlay">
        <div className="artist__details">
          <div className="artist__title" onClick={() => goTo(artist.id)}>
            {artist.title}
          </div>
          <div className="artist__dates">
            {artist.birth_date} - {artist.death_date}
          </div>
        </div>
      </div>
    </ArtistCardWrapper>
  );
};
export default ArtistCard;
