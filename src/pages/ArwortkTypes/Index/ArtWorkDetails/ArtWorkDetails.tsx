import { useParams } from "react-router";
import { ArtWorkPageWrapper } from "./ArtWorkDetails.styles";
import axiosInstance from "../../../../services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const ArtWorkDetails = () => {
    const {id} = useParams();
    const {
        data: artWorkTypeEx,
        isLoading,
        isFetched,
      } = useQuery({
        queryKey: [`artwork-type-card-${id}`],
        queryFn: async () => {
          return await axiosInstance.get(
            `/artworks/search?query[term][artwork_type_id]=${id}&limit=12&fields=id,title,image_id,artwork_type_title`
          );
        },
        select: (res) => {
            console.log(res);
          return res.data.data;
        },
        staleTime:Infinity
      });
    
  return <ArtWorkPageWrapper>

  </ArtWorkPageWrapper>;
};
export default ArtWorkDetails;
