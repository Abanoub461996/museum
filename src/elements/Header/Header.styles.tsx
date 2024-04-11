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
    /* position: fixed; */
    z-index: 100;
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    padding: 1em 5%;
    .logo {
      cursor: pointer;
    }
    .nav__items {
      font-family: Truculenta, sans-serif;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1em;
      font-size: 20px;
      .nav_item {
        cursor: pointer;
        position: relative;
        &:after {
          content: "";
          width: 0%;
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--dark);
          transition: width 0.3s ease;
        }
      }
      .nav_item.active {
        &:after {
          width: 100%;
        }
      }
      .nav_item:hover {
        &:after {
          width: 100%;
        }
      }
    }
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
`;
