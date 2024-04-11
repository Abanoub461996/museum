import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--main-bg);
  color: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
  font-size: 16px;
  position:absolute;
  top: 0;
  left: 0;
  z-index: 999;
  .loader__header {
    font-size: 5em;
  }
  .loader__msg {
    font-size: 2em;
    @media (max-width: 900px) {
      font-size: 1.2em;
    }
  }
  #quote {
    -webkit-transform: translate3d(0, 0, 0);
    font-size: 24px;
    line-height: 36px;
    color: #dedede;
    margin: 50px auto;
    width: 800px;
    visibility: hidden;
  }

  #quote div {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }
`;
