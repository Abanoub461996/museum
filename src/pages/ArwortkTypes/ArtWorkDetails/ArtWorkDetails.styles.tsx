import styled from "styled-components";

export const ArtWorkPageWrapper = styled.div`
  padding: 5%;
  .page__header {
    font-family: lobster;
    font-size: 28px;
    position: relative;
    width: fit-content;
    padding: 0.5em 0;
    margin-bottom: 1em;
    &:after {
      content: "";
      width: 100%;
      position: absolute;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--dark);
      transition: width 0.3s ease;
    }
  }
  .scroll_reveal_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .scroll_reveal_col {
      width: calc(33.3334%);
    }
  }
`;
