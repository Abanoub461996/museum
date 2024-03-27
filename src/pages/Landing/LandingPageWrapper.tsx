import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/api/axiosInstance";
import LandingPage from "./Landing";
import Gallery from "../../elements/scrollTrigger/Gallery";

const LandingPageWrapper = () => {
  const { data: galleryData, isFetched } = useQuery({
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
          (artwork) =>
            artwork.artwork_type_title === el.artwork_type_title ||
            el.artwork_type_title === "Installation" ||
            el.artwork_type_title === "Miniature room"
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
  return (
    <>
      {isFetched && !!galleryData?.length && (
        <>
          <LandingPage
            introData={galleryData.filter((el) =>
              ["Photograph", "Funerary Object"].includes(el.artwork_type_title)
            )}
            galleryData={galleryData.filter((el) =>
              [
                "Painting",
                "Print",
                "Architectural fragment",
                "Drawing and Watercolor",
              ].includes(el.artwork_type_title)
            )}
          />

          <Gallery galleryData={galleryData} />
        </>
      )}
    </>
  );
};

export default LandingPageWrapper;
