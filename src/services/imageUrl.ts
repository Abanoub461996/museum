const imageUrl = (id: string) => {
  return `${import.meta.env.VITE_IIIF_IMAGES}/${id}/full/843,/0/default.jpg`;
};
export default imageUrl;
