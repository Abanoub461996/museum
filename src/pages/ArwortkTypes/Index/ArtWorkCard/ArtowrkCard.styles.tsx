import styled from "styled-components";

export const ArtWorkCardWrapper = styled.div`
  margin-bottom: 2em;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  overflow: hidden;
  &:hover {
    .card__content {
      .card__arrow {
        transform: scale(1.2);
      }
    }
  }
  .card__content {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card__title {
      font-family: lobster;
      font-size: 24px;
    }
    .card__arrow {
      cursor: pointer;
    }
  }
`;
