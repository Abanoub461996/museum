import styled from "styled-components";

export const ArtPieceWrapper = styled.div<{
  $color: any;
  $thumbnail: any;
}>`
  width: 100%;
  overflow: hidden;
  position: relative;
  .art__piece_img {
    width: 100%;
  }
  .art__piece_overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: all 400ms ease-out;
    -moz-transition: all 400ms ease-out;
    -o-transition: all 400ms ease-out;
    -ms-transition: all 400ms ease-out;
    transition: all 400ms ease-out;
    text-align: center;
    background: rgba(0, 0, 0, 0);
    color: var(--main-bg);

    .art__piece_details {
      width: fit-content;
      max-width: 90%;
      margin: auto;
      font-size: 1.5em;
      opacity: 0;
      @media (max-width: 900px) {
        font-size: 1.2em;
      }
      .art__piece_title {
        cursor: pointer;
        font-size: 2em;
        font-family: "lobster";
        position: relative;
        margin-bottom: 1em;
        text-decoration: underline;
      }
      svg {
        fill: var(--main-bg);
        width: 24px;
        height: 24px;
        @media (max-width: 900px) {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  &:hover {
    .art__piece_img {
      box-shadow: 6px 6px 10px 20px #0000001a;
      transform: scaleX(1.1);
      background-color: var(--main-bg);
    }
    .art__piece_overlay {
      background: black;
      background: rgba(0, 0, 0, 0.6);
      .art__piece_details {
        opacity: 1;
      }
    }
  }

  .art__img_skeleton {
    height: ${(props) =>
      (props.$thumbnail?.height / props.$thumbnail?.width) * 33.3333}vw;
    background-color: ${(props) =>
      `hsl(${props?.$color?.h}, ${props?.$color?.s}%, ${props?.$color?.l}%)}`};
  }
`;
