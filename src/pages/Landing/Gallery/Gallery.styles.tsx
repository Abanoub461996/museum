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
    height: 400vh;
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
    top: 25vh;
    width: 50vw;
    left: 50%;
    transform: translate(-50%, 0);
    height: 50vh;
  }

  .gridLayer:nth-child(2) {
    z-index: 1;
  }
  .gridLayer:nth-child(2) .gridBlock {
    top: 15vh;
    left: 5vw;
    width: 15%;
  }

  .gridLayer:nth-child(3) {
    z-index: -1;
  }
  .gridLayer:nth-child(3) .gridBlock {
    top: 10vh;
    left: 70vw;
    width: 18%;
  }

  .gridLayer:nth-child(4) {
    z-index: -1;
  }
  .gridLayer:nth-child(4) .gridBlock {
    bottom: 0vh;
    left: 7vw;
    width: 20%;
  }
  .gridLayer:nth-child(5) .gridBlock {
    bottom: 3vh;
    left: 80vw;
    width: 12%;
  }

  .gridBlock {
    display: block;
    position: absolute;
  }
`;
