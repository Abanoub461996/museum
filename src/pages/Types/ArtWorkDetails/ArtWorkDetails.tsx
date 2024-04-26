import { useParams } from "react-router";
import { ArtWorkPageWrapper } from "./ArtWorkDetails.styles";
import axiosInstance, {
  noLoaderInstance,
} from "../../../services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
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
}
const ArtWorkDetails = () => {
  const { id } = useParams();
  const [itemsCol1, setItemsCol1] = useState<ArtworkDetail[]>([]);
  const [itemsCol2, setItemsCol2] = useState<ArtworkDetail[]>([]);
  const [itemsCol3, setItemsCol3] = useState<ArtworkDetail[]>([]);

  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  const {
    data: artWorkTypeEx,
    isLoading,
    status,
  } = useQuery({
    queryKey: [`artwork-type-card-${id}`],
    queryFn: async () => {
      return await axiosInstance.get(
        `/artworks/search?query[term][artwork_type_id]=${id}&limit=12&fields=id,title,image_id,artwork_type_title,thumbnail,artist_title,date_display,color,place_of_origin`
      );
    },
    select: (res) => {
      return res.data;
    },
    staleTime: Infinity,
  });
  const splitData = (items) => {
    items = items.filter((item) => item.image_id);
    items.map((item, i) => {
      switch (i % 3) {
        case 0:
          setItemsCol3((prev) => [...prev, item]);
          break;
        case 1:
          setItemsCol2((prev) => [...prev, item]);
          break;
        case 2:
          setItemsCol1((prev) => [...prev, item]);
          break;
      }
    });
  };
  const splitDataCalled = useRef(false);

  useEffect(() => {
    if (status === "success" && !splitDataCalled.current) {
      splitData(artWorkTypeEx.data);
      splitDataCalled.current = true;
    }
  }, [status, artWorkTypeEx]);
  const fetchMoreData = () => {
    noLoaderInstance
      .get(
        `/artworks/search?query[term][artwork_type_id]=${id}&limit=12&page=${index}&fields=id,title,image_id,artwork_type_title,thumbnail,artist_title,date_display,color,place_of_origin`
      )
      .then((res) => {
        splitData(res.data.data);
        res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <ArtWorkPageWrapper>
      {!isLoading && itemsCol1.length && (
        <>
          <InfiniteScroll
            dataLength={[...itemsCol1, ...itemsCol2, ...itemsCol3].length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<LoadMore msg="loading more" replacable="..." />}
            endMessage={
              <LoadMore msg="Yay! You have seen it all" replacable="!" />
            }
          >
            <div className="page__content">
              <div className="page__header">{itemsCol1[0].artwork_type_title}s</div>
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
