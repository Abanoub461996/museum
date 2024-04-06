import { ArtWorkCardWrapper } from "./ArtowrkCard.styles";
import { ArtWorkTypeInterface } from "./../artworkInterfaces";
import axiosInstance from "../../../../services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import imageUrl from "../../../../services/imageUrl";
import { TiArrowRightOutline } from "react-icons/ti";
import { useNavigate } from "react-router";

const ArtWorkCard = ({ type }: { type: ArtWorkTypeInterface }) => {
  const navigate = useNavigate();
  const {
    data: artWorkTypeEx,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: [`artwork-type-card-${type.id}`],
    queryFn: async () => {
      return await axiosInstance.get(
        `/artworks/search?query[term][artwork_type_id]=${type.id}&limit=12&fields=id,title,image_id,artwork_type_title`
      );
    },
    select: (res) => {
      return res.data.data[0];
    },
    staleTime:Infinity
  });

  const goTo =(type: ArtWorkTypeInterface)=>{
    navigate(`${type.id}`);
  }
  return (
    <>
      {!isLoading && isFetched && artWorkTypeEx?.image_id && (
        <ArtWorkCardWrapper className="type_wrapper">
          <div className="card__content">
            <div className="card__title">{type.title}</div>
            <div className="card__arrow" onClick={()=>goTo(type)}>
              <TiArrowRightOutline size={24}/>
            </div>
          </div>
          <div className="card__image">
            <img src={imageUrl(artWorkTypeEx?.image_id)} alt="" />
          </div>
        </ArtWorkCardWrapper>
      )}
    </>
  );
};
export default ArtWorkCard;
