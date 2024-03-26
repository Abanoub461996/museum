import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/api/axiosInstance";
import LandingPage from "./Landing";

const LandingPageWrapper = () => {
  const {
    data: galleryData,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: [`images-van-Gogh`],
    queryFn: async () => {
      return await axiosInstance.get(
        `/artworks/search?query[term][is_public_domain]=true&&limit=100&&fields=id,title,image_id,artist_display,artwork_type_title,artwork_type_id`
      );
    },
    select: (res) => {
      const uniqueArtworks = res.data.data.reduce((uniqueArtworks, el) => {
        // Check if an artwork with the same title already exists in the uniqueArtworks array
        const existingArtwork = uniqueArtworks.find(
          (artwork) => artwork.artwork_type_title === el.artwork_type_title || el.artwork_type_title ==="Installation"||el.artwork_type_title ==="Miniature room"
        );

        // If the artwork does not exist in the uniqueArtworks array, add it
        if (!existingArtwork) {
          uniqueArtworks.push({
            ...el,
            url: `${res.data.config.iiif_url}/${el.image_id}/full/843,/0/default.jpg`,
          });
        }

        return uniqueArtworks;
      }, []);
      return uniqueArtworks;
    },
  });
  return <>{isFetched && <LandingPage galleryData={galleryData.slice(0,8)}/>}</>;
};

export default LandingPageWrapper;
