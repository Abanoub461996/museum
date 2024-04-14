import { useNavigate } from "react-router";
import { TypeCardWrapper } from "./TypeCard.styles";
import { useQuery } from "@tanstack/react-query";
import axiosInstance, { noLoaderInstance } from "../../../services/api/axiosInstance";
import imageUrl from "../../../services/imageUrl";

const TypeCard = ({ type }) => {
  const navigate = useNavigate();
  const goTo = (id: string) => {
    navigate(`${id}`);
  };
  const {
    data: artWorkTypeEx,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: [`artwork-type-card-${type.id}`],
    queryFn: async () => {
      return await noLoaderInstance.get(
        `/artworks/search?query[term][artwork_type_id]=${type.id}&limit=4&fields=id,title,image_id,artwork_type_title,date_display,thumbnail,artist_title,place_of_origin,color`
      );
    },
    select: (res) => {
      return res.data.data;
    },
    staleTime:Infinity
  });
  return (
    (isFetched) && <TypeCardWrapper $images={artWorkTypeEx.map(el=>imageUrl(el.image_id))}>
      <div className="type__details_overlay">
        <div className="type__details">
          <div className="type__title" onClick={() => goTo(type.id)}>
            {type.title}s
          </div>
        </div>
      </div>
    </TypeCardWrapper>
  );
};
export default TypeCard;
