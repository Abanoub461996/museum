import { useMemo, useState } from "react";
import { ArtistsListWrapper } from "./ArtistsList.styles";
import ArtistCard from "./ArtistCard/ArtistCard";
import { useScramble } from "use-scramble";
import SearchBar from "../../elements/SearchBar/SearchBar";

const ArtistsList = () => {
  const { ref, replay } = useScramble({
    text: "Discover The Most Popular Artists",
  });
  const { ref: searchRef, replay: replaySearchText } = useScramble({
    text: "Or Search For Your Own Favourite Artists",
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
  const submitSearch =(data)=>{
    console.log(data);
    
  }
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
        <SearchBar submitSearch={submitSearch}/>
      </div>
    </ArtistsListWrapper>
  );
};
export default ArtistsList;
