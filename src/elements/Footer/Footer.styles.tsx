import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  font-size: 16px;

  .footer__content {
    /* width: 90%; */
    /* margin: 0 auto; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    .footer__logo {
      font-size: 2em;
      font-weight: 700;
    }
    .site__map {
      display: flex;
      justify-content: flex-end;
      gap: 2em;
      align-items: flex-start;
      width: 60%;
      font-size: 20px;
      .site__map__category{
        font-weight: 700;
      }
      .site__map__list {
        div:not(.site__map__category){
          cursor: pointer;
          margin: 4px 0;
        }
      }
    }
  }
  .footer__tail{
    text-align: center;
  }
`;
