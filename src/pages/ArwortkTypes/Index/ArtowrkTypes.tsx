import { useQuery } from "@tanstack/react-query";
import { ArtowrkTypesWrapper } from "./ArtowrkTypes.styles";
import axiosInstance from "../../../services/api/axiosInstance";
import ArtWorkCard from "./ArtWorkCard/ArtowrkCard";
import ScrollReveal from "scrollreveal";
import { useEffect, useRef } from "react";

const ArtowrkTypes = () => {
  const {
    data: artWorkTypes,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: [`artwork-types-list`],
    queryFn: async () => {
      return await axiosInstance.get(`/artwork-types?limit=44&fields=id,title`);
    },
    select: (res) => {
      return res.data.data;
    },
    staleTime:Infinity
  });
  useEffect(() => {
    ScrollReveal().reveal(".scroll_reveal_container .scroll_reveal_col .type_wrapper", {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      scale: 1,
      easing: "ease",
      reset: true,
    });
  });

  return (
    <ArtowrkTypesWrapper>
      <div className="page__header">ArtWork Types</div>
      {!isLoading && isFetched && (
        <div className="scroll_reveal_container">
          <div className="scroll_reveal_col">
            {artWorkTypes.slice(0, 11).map((type) => {
              return <ArtWorkCard type={type} key={type.id} />;
            })}
          </div>
          <div className="scroll_reveal_col">
            {artWorkTypes.slice(11, 20).map((type) => {
              return <ArtWorkCard type={type} key={type.id} />;
            })}
          </div>
          <div className="scroll_reveal_col">
            {artWorkTypes.slice(21, 30).map((type) => {
              return <ArtWorkCard type={type} key={type.id} />;
            })}
          </div>
        </div>
      )}
    </ArtowrkTypesWrapper>
  );
};
export default ArtowrkTypes;
