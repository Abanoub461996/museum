import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  .stage {
    position: relative;
    background: white;
  }

  /*  ========================================================================== 
    Nav Header
    ========================================================================== */
  .header {
    position: fixed;
    left: 40px;
    top: 24px;
    z-index: 100;
    display: flex;
  }
  @media all and (max-width: 768px) {
    .header {
      display: block;
      left: 24px;
    }
  }

  .logo {
    font-size: 27px;
    letter-spacing: -1px;
  }

  .nav-btn,
  .nav-btn__svg {
    width: 56px;
    height: 30px;
  }

  .nav-btn {
    display: block;
    margin: -2px 0 0 56px;
  }
  @media all and (max-width: 768px) {
    .nav-btn {
      margin: 18px 0 0 -6px;
    }
  }

  .nav-btn__svg {
    pointer-events: none;
  }

  /*  ========================================================================== 
    Intro
    ========================================================================== */
  .intro,
  .footer {
    height: 100vh;
  }

  .intro {
    position: relative;
    padding: 5vw;
    background: #c0d7d8;
    overflow: hidden;
  }

  .intro__content {
    position: absolute;
    right: 8%;
    bottom: 15%;
    z-index: 3;
  }
  @media all and (max-width: 768px) {
    .intro__content {
      right: auto;
    }
  }

  .intro__title {
    font-size: 25vw;
    overflow: hidden;
    letter-spacing: -2.3vw;
    padding-right: 2.3vw;
  }
  @media all and (max-width: 768px) {
    .intro__title {
      margin-bottom: 5vh;
    }
  }

  .intro__img {
    position: absolute;
    width: 35%;
    max-width: 390px;
    height: auto;
  }
  @media all and (max-width: 768px) {
    .intro__img {
      width: 75vw;
    }
  }

  .intro__img--1 {
    z-index: 2;
    left: 10%;
    bottom: 35%;
  }
  @media all and (max-width: 768px) {
    .intro__img--1 {
      left: 50%;
      bottom: 50vh;
    }
  }

  .intro__img--2 {
    z-index: 1;
    left: 25%;
    bottom: 40%;
  }
  @media all and (max-width: 768px) {
    .intro__img--2 {
      left: 70%;
      bottom: 60vh;
    }
  }

  .intro__txt {
    max-width: 35vw;
    margin-left: 25vw;
  }
  @media all and (max-width: 768px) {
    .intro__txt {
      max-width: 80vw;
      margin-left: 5vw;
    }
  }

  /*  ========================================================================== 
    Slides
    ========================================================================== */
  .slide {
    display: flex;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;
  }
  .slide:nth-of-type(even) {
    background: #c4cdc4;
  }
  @media all and (max-width: 768px) {
    .slide {
      display: block;
      position: relative;
    }
  }

  /*  Columns
    ========================================================================== */
  .col {
    flex-basis: 50%;
  }
  @media all and (max-width: 768px) {
    .col {
      display: block;
      width: 100%;
      height: 100vh;
    }
  }

  .col--1 {
    position: relative;
    z-index: 1;
  }
  @media all and (max-width: 768px) {
    .col--1 {
      position: relative;
      z-index: 1;
    }
  }

  .col--2 {
    position: relative;
    overflow: hidden;
  }
  @media all and (max-width: 768px) {
    .col--2 {
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
    }
  }

  /*  ========================================================================== 
    Column Content
    ========================================================================== */
  .col__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    height: 100%;
    padding: 6vw 6vw 10vw;
  }
  @media all and (max-width: 768px) {
    .col__content {
      width: 80%;
    }
  }

  .col__content--1 {
    background: #d8c0c0;
  }
  @media all and (max-width: 768px) {
    .col__content--1 {
      background: rgba(216, 192, 192, 0.9);
    }
  }

  .col__content--2 {
    background: #cdd5e0;
  }
  @media all and (max-width: 768px) {
    .col__content--2 {
      background: rgba(205, 213, 224, 0.9);
    }
  }

  .col__content--3 {
    background: #f3d3b0;
  }
  @media all and (max-width: 768px) {
    .col__content--3 {
      background: rgba(243, 211, 176, 0.9);
    }
  }

  .col__content--4 {
    background: #f8e9e6;
  }
  @media all and (max-width: 768px) {
    .col__content--4 {
      background: rgba(248, 233, 230, 0.9);
    }
  }

  .col__content--5 {
    background: #d1e2ec;
  }
  @media all and (max-width: 768px) {
    .col__content--5 {
      background: rgba(209, 226, 236, 0.9);
    }
  }

  .col__content--6 {
    background: #d7cec5;
  }
  @media all and (max-width: 768px) {
    .col__content--6 {
      background: rgba(215, 206, 197, 0.9);
    }
  }

  /*  Column Content
    ========================================================================== */
  .col__content-title {
    margin: 0 0 2vw;
    font-size: 11vw;
    letter-spacing: -0.8vw;
  }
  @media all and (max-width: 768px) {
    .col__content-title {
      margin: 0 0 6vw;
      font-size: 18vw;
    }
  }

  .col__content-wrap {
    display: flex;
    justify-content: flex-end;
  }
  @media all and (max-width: 768px) {
    .col__content-wrap {
      flex-direction: column;
    }
  }

  .col__content-txt {
    max-width: 22vw;
    order: 2;
    margin-left: 32px;
  }
  @media all and (max-width: 768px) {
    .col__content-txt {
      order: 1;
      max-width: 40vw;
      margin: 0 0 10vw 10vw;
    }
  }

  .slide-link {
    position: relative;
    order: 1;
    display: flex;
    justify-content: flex-end;
    width: 75px;
    height: 53px;
  }
  .slide-link > * {
    pointer-events: none;
  }
  @media all and (max-width: 768px) {
    .slide-link {
      order: 2;
      align-self: flex-end;
    }
  }

  .slide-link__circ {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: 1px solid var(--dark);
  }

  .slide-link__line {
    position: absolute;
    top: 25px;
    left: 0;
    width: 64px;
    height: 3px;
    background: var(--dark);
  }

  .line {
    overflow: hidden;
  }
  .line:nth-of-type(even) {
    margin-top: -1vw;
  }

  .line__inner {
    display: block;
  }

  .slide__scroll-link {
    position: absolute;
    right: -113px;
    bottom: 3.5vw;
    display: block;
    width: 140px;
    height: 140px;
    background: var(--dark);
    overflow: hidden;
  }
  @media all and (max-width: 768px) {
    .slide__scroll-link {
      display: none;
    }
  }

  .slide__scroll-line {
    position: absolute;
    left: 26px;
    bottom: 0;
    width: 1px;
    height: 100%;
  }

  .slide--0 .slide__scroll-line {
    background: #c0d7d8;
  }

  .slide--1 .slide__scroll-line {
    background: #d8c0c0;
  }

  .slide--2 .slide__scroll-line {
    background: #cdd5e0;
  }

  .slide--3 .slide__scroll-line {
    background: #f3d3b0;
  }

  .slide--4 .slide__scroll-line {
    background: #f8e9e6;
  }

  .slide--5 .slide__scroll-line {
    background: #d1e2ec;
  }

  .slide--6 .slide__scroll-line {
    background: #d7cec5;
  }

  /*  ========================================================================== 
    Column Image
    ========================================================================== */
  .col__image-wrap {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 160vh;
  }

  .img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  /*========================================================================= */

  /* GALLERY */

  .gridBlock {
    opacity: 0;
  }

  /* Grid almost fully pulled from https://www.rino-pelle.com/ */
  .grid-container {
    width: 100vw;
    height: 500vh;
    position: relative;
  }
  .grid {
    top: 0;
    left: 0;
    z-index: 1;
    width: 70vw;
    height: 60vw;
    margin: 0 calc(100vw / 20 * 3);
    position: absolute;
  }
  @media only screen and (max-width: 580px) {
    .grid {
      margin: 0;
      width: 100vw;
      height: 89.444vw;
    }
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
    transform-origin: 44.951% 50%;
  }
  .gridLayer:nth-child(1) .gridBlock {
    top: 5vw;
    left: 20vw;
    width: 10vw;
    height: 10vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(1) .gridBlock {
      top: 11.111vw;
      left: 23.889vw;
      width: 15vw;
      height: 15vw;
    }
  }
  .gridLayer:nth-child(2) .gridBlock {
    top: 0;
    left: 32.5vw;
    width: 15vw;
    height: 15vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(2) .gridBlock {
      top: 0;
      left: 43.333vw;
      width: 26.389vw;
      height: 26.389vw;
    }
  }
  .gridLayer:nth-child(3) .gridBlock {
    left: 0;
    top: 25vw;
    width: 15vw;
    height: 15vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(3) .gridBlock {
      top: 30.278vw;
      left: 0;
      width: 26.389vw;
      height: 26.389vw;
    }
  }
  .gridLayer:nth-child(4) .gridBlock {
    top: 17.5vw;
    left: 17.5vw;
    width: 30vw;
    height: 30vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(4) .gridBlock {
      top: 30.278vw;
      left: 30.278vw;
      width: 39.444vw;
      height: 39.444vw;
    }
  }
  .gridLayer:nth-child(5) {
    z-index: 1;
  }
  .gridLayer:nth-child(5) .gridBlock {
    top: 20vw;
    left: 50vw;
    width: 5vw;
    height: 5vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(5) .gridBlock {
      top: 23.889vw;
      left: 73.889vw;
      width: 15.278vw;
      height: 15.278vw;
    }
  }
  .gridLayer:nth-child(5) a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gridLayer:nth-child(5) svg {
    width: 1.75vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(5) svg {
      width: 4.722vw;
    }
  }
  .gridLayer:nth-child(6) .gridBlock {
    left: 50vw;
    top: 27.5vw;
    width: 20vw;
    height: 20vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(6) .gridBlock {
      top: 43.889vw;
      left: 73.889vw;
      width: 26.389vw;
      height: 26.389vw;
    }
  }
  .gridLayer:nth-child(7) .gridBlock {
    left: 10vw;
    top: 42.5vw;
    width: 5vw;
    height: 5vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(7) .gridBlock {
      display: none;
    }
  }
  .gridLayer:nth-child(8) .gridBlock {
    bottom: 5vw;
    left: 42.5vw;
    width: 5vw;
    height: 5vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(8) .gridBlock {
      display: none;
    }
  }
  .gridLayer:nth-child(9) .gridBlock {
    bottom: 0;
    left: 50vw;
    width: 10vw;
    height: 10vw;
  }
  @media only screen and (max-width: 580px) {
    .gridLayer:nth-child(9) .gridBlock {
      top: 73.889vw;
      left: 58.889vw;
      width: 15.278vw;
      height: 15.278vw;
    }
  }
  .gridBlock {
    display: block;
    position: absolute;
  }
`;
