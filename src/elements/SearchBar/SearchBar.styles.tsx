import styled from "styled-components";

export const SearchBarWrapper = styled.form`
  width: 100%;
  font-size: 30px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
  .search__element {
    display: flex;
    position: relative;
    width: 80%;
    margin: auto;
    border-radius: 12px;
    border: 1px solid var(--fifth);
    overflow: hidden;
    input {
      padding: 0.2em 1em;
      width: 100%;
      background-color: var(--third);

      box-shadow: none !important;
      position: relative;
    }
    .search__btn {
      font-size: 1em;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--forth);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3em;
      cursor: pointer;
    }
  }
`;
