import { useEffect, useMemo, useState } from "react";
import { TypeListWrapper } from "./TypesList.styles";
import { useScramble } from "use-scramble";
import { useNavigate } from "react-router";
import TypeCard from "./TypeCard/TypeCard";
import { useQuery } from "@tanstack/react-query";
import axiosInstance, { noLoaderInstance } from "../../services/api/axiosInstance";
import SearchBar from "../../elements/SearchBar/SearchBar";
import { TiArrowRightOutline } from "react-icons/ti";

const TypesList = () => {
  const navigate = useNavigate();
  const { ref, replay } = useScramble({
    text: "See The Most Common Art Work Types.",
  });
  const types = useMemo(() => {
    return [
      {
        id: 1,
        title: "Painting",
      },
      {
        id: 11,
        title: "Book",
      },

      { id: 3, title: "Sculpture" },
      { id: 27, title: "Funerary Object" },
    ];
  }, []);
  const noVisuals = useMemo(() => {
    return [17, 40, 45, 13];
  }, []);
  const [viewMore, setViewMore] = useState<boolean>(false);
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
      return res.data.data.filter(
        (el) => ![...types.map((el) => el.id), ...noVisuals].includes(el.id)
      );
    },
    staleTime: Infinity,
  });

  const goTo = (id: number) => {
    navigate(`${id}`);
  };
  return (
    <TypeListWrapper>
      <div className="scrubmle_texts" ref={ref} onMouseOver={replay}></div>
      <div className="small__artists_list">
        {types.map((type) => {
          return (
            <div className="artist__card" key={type.id}>
              <TypeCard type={type} />
            </div>
          );
        })}
      </div>
      <div className="scrubmle_texts">
        Or Discover New Elegent Types{" "}
        <i
          className="underline cursor-pointer"
          onClick={() => setViewMore(true)}
        >
          here.
        </i>
      </div>
      <div className="search__results_list">
        {isLoading && <div className="scrubmle_texts">Loading...</div>}
        {!!artWorkTypes?.length && viewMore && (
          <div className="small__artists_list">
            {artWorkTypes.map((type) => {
              return (
                <div className="artist__card" key={type.id}>
                  <TypeCard type={type} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </TypeListWrapper>
  );
};
export default TypesList;
