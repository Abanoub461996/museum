import styled from "styled-components";

export const ArtPieceCardWrapper = styled.div<{ $color: any; $thumbnail: any }>`
  width: 100%;
  margin-bottom: 3em;
  .art__piece_img {
    width: 100%;
    &:hover {
      box-shadow: 6px 6px 10px 20px #0000001a;
      transform: scaleX(1.05);
      background-color: var(--main-bg);
    }
  }
  .art__piece_title {
    font-size: 1.8em;
    text-align: center;
    margin: 1em 0 0;
    @media (max-width: 900px) {
      font-size: 1.4em;
    }
    /* color: ${(props) =>
      `hsl(${props?.$color?.h}, ${props?.$color?.s}%, ${props?.$color?.l}%)}`}; */
  }
  .art__piece_details {
    width: 80%;
    margin: auto;
    font-size: 1.5em;
    @media (max-width: 900px) {
      font-size: 1.2em;
    }
    .artpiece__flex {
      display: flex;
      justify-content: center;
      @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    svg {
      /* fill: ${(props) =>
        `hsl(${props?.$color?.h}, ${props?.$color?.s}%, ${props?.$color?.l}%)}`}; */

      @media (max-width: 900px) {
        width: 16px;
        height: 16px;
      }
    }
  }

  .art__img_skeleton {
    height: ${(props) =>
      (props.$thumbnail.height / props.$thumbnail.width) * 33.3333}vw;
    background-color: ${(props) =>
      `hsl(${props?.$color?.h}, ${props?.$color?.s}%, ${props?.$color?.l}%)}`};
  }
`;
