import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 120px;
  }
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 10vh;
  @media screen and (min-width: 768px) {
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  max-width: 90%;

  line-height: 34px;
  text-align: justify;

  color: #ffffff;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 30px;
    line-height: 44px;
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const TitleCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 44px;
  margin-bottom: 8px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const SubtitleCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const CriarText = styled.p`
  color: #23dd7a;
`;

export const Rodape = styled.div`
  display: flex;
  gap: 5px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
`;
