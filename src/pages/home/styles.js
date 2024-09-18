import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 13vh;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  div {
    img {
      width: 70vw;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 23vh;

    display: flex;
    flex-direction: row;
    div {
      max-width: 35vw;
      img {
        width: 40vw;
      }
    }
  }
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleHighlight = styled.span`
  color: #e4105d;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  max-width: 420px;

  margin-bottom: 20px;

  color: #ffffff;
`;
