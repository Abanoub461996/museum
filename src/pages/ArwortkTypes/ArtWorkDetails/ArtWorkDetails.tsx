import { useParams } from "react-router";
import { ArtWorkPageWrapper } from "./ArtWorkDetails.styles";
import axiosInstance, { noLoaderInstance } from "../../../services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ArtPieceCard from "../../../elements/ArtPieceCard/ArtPieceCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadMore from "../../../elements/Loader/ShowMore";
interface ArtworkDetail {
  id: string;
  title: string;
  image_id: string;
  artwork_type_title: string;
  thumbnail: string;
  timestamp: string;
  color:any;
}
const ArtWorkDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState<ArtworkDetail[]>([]);
  const [itemsCol1, setItemsCol1] = useState<ArtworkDetail[]>([]);
  const [itemsCol2, setItemsCol2] = useState<ArtworkDetail[]>([]);
  const [itemsCol3, setItemsCol3] = useState<ArtworkDetail[]>([]);

  const [hasMore, setHasMore] = useState(false);
  const [index, setIndex] = useState(2);

  const {
    data: artWorkTypeEx,
    isLoading,
    status,
  } = useQuery({
    queryKey: [`artwork-type-card-${id}`],
    queryFn: async () => {
      return await axiosInstance
        .get(
          `/artworks/search?query[term][artwork_type_id]=${id}&limit=12&fields=id,title,image_id,artwork_type_title,thumbnail,artist_title,date_display,color,place_of_origin`
        );
    },
    select: (res) => {
      return res.data;
    },
    staleTime: Infinity,
    enabled: !items.length,
  });
  useEffect(() => {
    if (status === "success") {
      setHasMore(artWorkTypeEx.total_pages >2)
      setItems([...artWorkTypeEx.data]);
      setItemsCol1(artWorkTypeEx.data.slice(0, 4));
      setItemsCol2(artWorkTypeEx.data.slice(4, 8));
      setItemsCol3(artWorkTypeEx.data.slice(8, 12));
    }
  }, [status, artWorkTypeEx]);
  const fetchMoreData = () => {
    noLoaderInstance
      .get(
        `/artworks/search?query[term][artwork_type_id]=${id}&limit=12&page=${index}&fields=id,title,image_id,artwork_type_title,thumbnail,artist_title,date_display,color,place_of_origin`
      )
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data.data]);
        setItemsCol1((prevItems) => [
          ...prevItems,
          ...res.data.data.slice(0, 4),
        ]);
        setItemsCol2((prevItems) => [
          ...prevItems,
          ...res.data.data.slice(4, 8),
        ]);
        setItemsCol3((prevItems) => [
          ...prevItems,
          ...res.data.data.slice(8, 12),
        ]);
        res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <ArtWorkPageWrapper>
      {!isLoading && items.length && (
        <>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<LoadMore msg="loading more" replacable="..."/>}
            endMessage={
              <LoadMore msg="Yay! You have seen it all" replacable="!"/>
            }
          >
            <div className="page__content">
              <div className="page__header">{items[0].artwork_type_title}s</div>
              <div className="artwork__container">
                 <div className="scroll_reveal_col">
                  {itemsCol1.map((pieceOfArt) => {
                    return (
                      <div className="art__piece_card" key={pieceOfArt.id}>
                        <ArtPieceCard pieceOfArt={pieceOfArt} />
                      </div>
                    );
                  })}
                </div>
                <div className="scroll_reveal_col">
                  {itemsCol2.map((pieceOfArt) => {
                    return (
                      <div className="art__piece_card" key={pieceOfArt.id}>
                        <ArtPieceCard pieceOfArt={pieceOfArt} />
                      </div>
                    );
                  })}
                </div>
                <div className="scroll_reveal_col">
                  {itemsCol3.map((pieceOfArt) => {
                    return (
                      <div className="art__piece_card" key={pieceOfArt.id}>
                        <ArtPieceCard pieceOfArt={pieceOfArt} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </InfiniteScroll>
        </>
      )}
    </ArtWorkPageWrapper>
  );
};
export default ArtWorkDetails;
