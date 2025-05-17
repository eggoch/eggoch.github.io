import styled from "styled-components";

export const PleaseWrapper = styled.div<{
  isAnimating?: boolean;
  isTransitioning: boolean;
}>`
  position: absolute;
  display: flex;
  width: 275px;
  z-index: 1;
  bottom: 10%;
  justify-content: space-between;
  align-items: center;
  right: -5%;

  ${(props) =>
    props.isAnimating &&
    `
    animation: smooth 2.0s ease-in;
    right: 7.5%;
    `}

  ${(props) =>
    props.isTransitioning &&
    `
    animation: disappear 700ms ease-in;
    opacity: 0;
    `}

  @keyframes smooth {
    0% {
      right: -5%;
      opacity: 0;
    }
    50% {
      right: 0;
      opacity: 0;
    }
    100% {
      right: 7.5%;
      opacity: 1;
    }
  }

  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
