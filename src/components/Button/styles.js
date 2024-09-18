import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #ffffff;
  padding: 2px 12px;
  min-width: 23vw;
  width: 100%;
  font-weight: 600;
  height: 30px;
  cursor: pointer;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
  &:hover {
    scale: 1.04;
    transition: 0.2s;
  }
  @media screen and (min-width: 768px) {
    min-width: 120px;
    height: 25px;
  }
`;
