import styled from "styled-components";

export const ArtistWorkWrapper = styled.div`
  padding: 5% 0;
  .page__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .artwork__container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    .scroll_reveal_col {
      width: calc(33.3334%);
    }
  }
`;
export const ArtistDetailsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: 20px;
  .artist__title {
    font-family: lobster;
  }
  .artist__description {
  }
`;

export const ArtistWorkListWrapper = styled.div`
  padding: 5% 0;
  .page__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .artwork__container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    .scroll_reveal_col {
      width: calc(33.3334%);
    }
  }
`;
