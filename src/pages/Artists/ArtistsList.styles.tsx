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
`;
