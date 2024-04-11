import styled from "styled-components";

export const ArtPieceCardWrapper = styled.div`
  width: 100%;
  margin-bottom: 2em;
  .art__piece_details {
    width: 80%;
    margin: auto;
    .art__piece_img {
      width: 100%;
    }
    .art__piece_title {
      font-size: 1.8em;
      text-align: center;
    }
    .art__piece_hint {
      font-size: 1.5em;
    }
  }
  &:hover .art__piece_img{
    box-shadow: 6px 6px 10px 20px #0000001a;
    transform: scaleX(1.05);
    background-color: var(--main-bg);
  }
`;
