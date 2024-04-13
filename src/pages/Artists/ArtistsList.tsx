import { useMemo, useState } from "react";
import { ArtistsListWrapper } from "./ArtistsList.styles";
import ArtistCard from "./ArtistCard/ArtistCard";
import { useScramble } from "use-scramble";
import SearchBar from "../../elements/SearchBar/SearchBar";
import { useMutation } from "@tanstack/react-query";
import { noLoaderInstance } from "../../services/api/axiosInstance";
import { useNavigate } from "react-router";
import { TiArrowRightOutline } from "react-icons/ti";

const ArtistsList = () => {
  const navigate = useNavigate();
  const { ref, replay } = useScramble({
    text: "Discover The Most Popular Artists' Work",
  });
  const { ref: searchRef, replay: replaySearchText } = useScramble({
    text: "Or Find Your Own Favourite Artists Among Over 13,000 Artists",
  });
  const artists = useMemo(() => {
    return [
      {
        id: 40610,
        title: "Vincent van Gogh",
        birth_date: 1932,
        death_date: 1890,
        image_url:
          "https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg",
      },
      {
        id: 34123,
        title: "Salvador Dalí",
        birth_date: 1904,
        death_date: 1989,
        image_url:
          "https://hips.hearstapps.com/hmg-prod/images/salvador-dali-gettyimages-2695565.jpg?crop=0.9994444444444445xw:1xh;center,top&resize=980:*",
      },
      {
        id: 36198,
        title: "Pablo Picasso",
        birth_date: 1881,
        death_date: 1973,
        image_url: "https://www.pablopicasso.org/assets/img/picasso.jpg",
      },
      {
        id: 31492,
        title: "Katsushika Hokusai",
        birth_date: 1760,
        death_date: 1849,
        image_url:
          "https://s.turbifycdn.com/aah/yhst-138752438759755/artist-katsushika-hokusai-12.gif",
      },
    ];
  }, []);
  const [searchList, setSearchList] = useState<any[]>([]);
  const { mutate, data: searchRes } = useMutation({
    mutationFn: (searchTerm: string) => {
      return noLoaderInstance.get(
        `/artists/search?q=${searchTerm}&fields=birth_date,death_date,title,id`
      );
    },
    onSuccess: (res) => {
      setSearchList(res.data.data);
      return res.data.data;
    },
    // You can also specify other properties here if needed, such as onSuccess, onError, etc.
  });
  const submitSearch = async (searchTerm: string) => {
    await mutate(searchTerm);
  };
  const goTo = (id: number) => {
    navigate(`${id}`);
  };
  return (
    <ArtistsListWrapper>
      <div className="scrubmle_texts" ref={ref} onMouseOver={replay}></div>
      <div className="small__artists_list">
        {artists.map((artist) => {
          return (
            <div className="artist__card" key={artist.id}>
              <ArtistCard artist={artist} />
            </div>
          );
        })}
      </div>
      <div
        className="scrubmle_texts"
        ref={searchRef}
        onMouseOver={replaySearchText}
      ></div>
      <div className="search__element w-full flex">
        <SearchBar submitSearch={submitSearch} />
      </div>
      <div className="search__results_list">
        {!!searchList.length && (
          <div className="results__list_wrapper">
            {searchList.map((result) => {
              return (
                <div
                  className="result__list_item"
                  key={result.id}
                  onClick={() => goTo(result.id)}
                >
                  <div>
                    <div className="result__title">{result.title}</div>
                    {result?.birth_date && (
                      <div className="result__era">
                        ({result.birth_date} - {result.death_date})
                      </div>
                    )}
                  </div>
                  <div className="card__arrow">
                    <TiArrowRightOutline size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ArtistsListWrapper>
  );
};
export default ArtistsList;
