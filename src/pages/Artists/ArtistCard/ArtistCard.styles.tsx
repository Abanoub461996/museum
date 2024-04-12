import styled from "styled-components";

export const ArtistCardWrapper = styled.div<{ $image: string }>`
  width: 100%;
  height: 600px;
  background-image: ${(props) => `url(${props?.$image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  overflow: hidden;
  position: relative;
  @media (max-width: 900px) {
    height: 400px;
  }

  .artist__details_overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: 0.5s ease;
    -webkit-transition: all 400ms ease-out;
    -moz-transition: all 400ms ease-out;
    -o-transition: all 400ms ease-out;
    -ms-transition: all 400ms ease-out;
    transition: all 400ms ease-out;
    text-align: center;
    background: rgba(0, 0, 0, 0);
    .artist__details {
      opacity: 0;
      height: -webkit-fill-available;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
      color: var(--main-bg);
      .artist__title {
        cursor: pointer;
        font-size: 2em;
        font-family: "lobster";
        position: relative;
        margin-bottom: 1em;
        &:after {
          content: "";
          width: 0%;
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--main-bg);
          transition: width 0.3s ease;
        }
      }
    }
  }
  &:hover {
    background-size: 120%;
    .artist__details_overlay {
      background: black;
      background: rgba(0, 0, 0, 0.6);
      .artist__details {
        opacity: 1;
      }
      .artist__title:after {
        width: 100% !important;
      }
    }
  }
`;
