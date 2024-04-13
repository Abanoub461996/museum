import styled from "styled-components";

export const ArtistsListWrapper = styled.div`
  .scrubmle_texts {
    font-size: 2em;
    @media (max-width: 900px) {
      font-size: 1.2em;
    }
    text-align: center;
    width: 100%;
    margin: 1em 0;
    font-family: "lobster";
  }
  .small__artists_list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    .artist__card {
      width: 50%;
    }
  }
  .search__results_list {
    width: 80%;
    margin: auto;
    border-radius: 12px;

    overflow: visible;
    .results__list_wrapper {
      display: flex;
      flex-wrap: wrap;
      margin:1em 0;
      .result__list_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid var(--fifth);
        padding: 1em;
        cursor: pointer;
        .result__title{
          font-family: 'lobster';
          font-size: 1.5em;
        }
        &:hover{
          transform: scale(1.05);
          box-shadow: 2px 2px 6px 1px var(--fifth);
          background-color: var(--main-bg);
        }
      }
    }
  }
`;
