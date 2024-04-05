import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .text_wrapper {
    padding: 20vh 0;
    width: 90%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    .space__resizing__text {
        font-size: 5em;
    }
    .scale__resizing__text {
        position: relative;
      padding: 4em 0;
      .artwork_type {
        width: fit-content;
        font-size: 20px;
        position: absolute;
        &.artwork_type__1 {
          top: 0;
          right: 15%;
        }
        &.artwork_type__2 {
          top: 50%;
          right: 10%;
        }
        &.artwork_type__3 {
          bottom: 10%;
          right: 12%;
        }
        &.artwork_type__4 {
          top: 5%;
          left: 15%;
        }
        &.artwork_type__5 {
          top: 35%;
          left: 10%;
        }
        &.artwork_type__6 {
          bottom: 20%;
          left: 12%;
        }
      }
    }
  }
`;
