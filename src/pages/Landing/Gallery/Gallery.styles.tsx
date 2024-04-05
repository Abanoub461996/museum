import styled from "styled-components";

export const GalleryWrapper = styled.div`
  position: relative;
  overflow: hidden;

  .gridBlock {
    opacity: 0;
  }

  /* Grid almost fully pulled from https://www.rino-pelle.com/ */
  .grid-container {
    width: 100vw;
    height: 180vh;
    position: relative;
    overflow: hidden;
  }
  .grid {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    /* margin: 0 calc(100vw / 20 * 3); */
    position: absolute;
    overflow: hidden;
  }
  .gridBlock {
    background-size: cover;
    background-color: darkgray;
  }
  .gridLayer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    will-change: transform;
    /* transform-origin: 50% 50%; */
  }

  .gridLayer:nth-child(1) .gridBlock {
    top: 35vh;
    width: 25vw;
    left: 50%;
    transform: translate(-50%, 0);
    /* height: 50vh; */
  }

  .gridLayer:nth-child(2) {
    z-index: 1;
  }
  .gridLayer:nth-child(2) .gridBlock {
    top: 25vh;
    left: 5vw;
    width: 20%;
  }

  .gridLayer:nth-child(3) {
    z-index: -1;
  }
  .gridLayer:nth-child(3) .gridBlock {
    top: 5vh;
    left: 30vw;
    width: 10%;
  }

  .gridLayer:nth-child(4) {
    z-index: -1;
  }
  .gridLayer:nth-child(4) .gridBlock {
    bottom: 10vh;
    left: 20vw;
    width: 12%;
  }
  .gridLayer:nth-child(5) .gridBlock {
    bottom: 5vh;
    left: 68vw;
    width: 11%;
  }
  .gridLayer:nth-child(6) .gridBlock {
    top: 32vh;
    left: 73vw;
    width: 20%;
  }
  .gridLayer:nth-child(7) .gridBlock {
    top: 8vh;
    left: 59vw;
    width: 17%;
  }

  .gridBlock {
    display: block;
    position: absolute;
  }
`;
