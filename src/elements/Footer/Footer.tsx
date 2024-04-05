import { useMemo } from "react";
import { FooterWrapper } from "./Footer.styles";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const artworkTypes = useMemo(() => {
    return [
      { id: 1, title: "Painting", category: "artwork_types" },
      {
        id: 14,
        title: "Drawing and Watercolor",
        category: "artwork_types",
      },
      { id: 18, title: "Print", category: "artwork_types" },
      {
        id: 19,
        title: "Architectural fragment",
        category: "artwork_types",
      },
      {
        id: 24,
        title: "Religious/Ritual Object",
        category: "artwork_types",
      },
      { id: 27, title: "Funerary Object", category: "artwork_types" },
    ];
  }, []);
  const artists = useMemo(() => {
    return [
      { id: 40610, title: "Vincent van Gogh", category: "artists" },
      { id: 34316, title: "Marcel Duchamp", category: "artists" },
      { id: 35670, title: "Henri Matisse", category: "artists" },
      { id: 36198, title: "Pablo Picasso", category: "artists" },
    ];
  }, []);
  const categories = useMemo(() => {
    return [
      { id: "PC-8", title: "Contemporary Art", category: "categories" },
      {
        title: "Modern Art",
        id: "PC-11", category: "categories"
      },
      {
        title: "Arts of the Americas",
        id: "PC-3", category: "categories"
      },
      {
        title: "Arts of the Ancient Mediterranean and Byzantium",
        id: "PC-4", category: "categories"
      },
      {
        title: "Painting and Sculpture of Europe",
        id: "PC-10", category: "categories"
      },
      {
        title: "Arts of Asia",
        id: "PC-7", category: "categories"
      },
    ];
  }, []);

  const goTo = (field) => {
    navigate(`/museum/${field.category}/${field.id}`);
  };
  return (
    <FooterWrapper>
      <div className="footer__content">
        <div className="footer__logo font-lobster">MuseuM</div>
        <div className="site__map font-truculenta">
          <div className="site__map__list artwork_types">
            <div className="site__map__category">ArtWork Types</div>
            {artworkTypes.map((artworktype) => {
              return (
                <div
                  key={artworktype.id}
                  onClick={() => goTo(artworktype)}
                >
                  {artworktype.title}
                </div>
              );
            })}
          </div>
          <div className="site__map__list artists">
            <div className="site__map__category">Artists</div>
            {artists.map((artist) => {
              return (
                <div key={artist.id} onClick={() => goTo(artist)}>
                  {artist.title}
                </div>
              );
            })}
          </div>
          <div className="site__map__list categorys">
            <div className="site__map__category">categorys</div>

            {categories.map((category) => {
              return <div key={category.id} onClick={() => goTo(category)}>{category.title}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="footer__tail">
        The data in this website is licensed under a Creative Commons Zero
        (CC0) 1.0 designation and the Terms and Conditions of artic.edu.
      </div>
    </FooterWrapper>
  );
};
export default Footer;
