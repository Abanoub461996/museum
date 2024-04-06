import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .stage {
    position: relative;
    background: white;
  }

  /*  ========================================================================== 
    Nav Header
    ========================================================================== */
  .header {
    position: fixed;
    z-index: 100;
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    padding: 1em 5%;
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
    bottom: 0;
    z-index: 3;
  }
  @media all and (max-width: 768px) {
    .intro__content {
      right: auto;
    }
  }

  .intro__title {
    font-size: 25vw;
    letter-spacing: -1vw;
  }
  @media all and (max-width: 768px) {
    .intro__title {
      margin-bottom: 5vh;
    }
  }

  .intro__img {
    position: absolute;
    width: 25%;
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
    left: 30%;
    bottom: 50%;
    width: 35%;
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
    max-height: 100vh;
    overflow: hidden;
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
      width: 100% !important;
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

  /*  Column Content
    ========================================================================== */
  .col__content-title {
    margin: 0 0 2vw;
    font-size: 5vw;
  }
  @media all and (max-width: 768px) {
    .col__content-title {
      margin: 0 0 6vw;
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
    font-family: Lobster;
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

  .slide--0,
  .slide--0 .slide__scroll-line {
    background: #c0d7d8;
  }

  .slide--1,
  .slide--1 .slide__scroll-line {
    background: #d8c0c0;
  }

  .slide--2,
  .slide--2 .slide__scroll-line {
    background: #cdd5e0;
  }

  .slide--3,
  .slide--3 .slide__scroll-line {
    background: #f3d3b0;
  }

  .slide--4,
  .slide--4 .slide__scroll-line {
    background: #f8e9e6;
  }

  .slide--5,
  .slide--5 .slide__scroll-line {
    background: #d1e2ec;
  }

  .slide--6,
  .slide--6 .slide__scroll-line {
    background: #d7cec5;
  }

  /*  ========================================================================== 
    Column Image
    ========================================================================== */
  .col__image-wrap {
    position: relative;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    /* height: 160vh; */
  }

  .img {
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  /*========================================================================= */
  `;