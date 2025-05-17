import styled from "styled-components";

export const NameTag = styled.img<{ isTransitioning?: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  left: 0;
  opacity: 0;

  ${(props) =>
    props.isTransitioning
      ? `
    transform: rotate(12.5deg);
    top: -10%;
    left: 20%;
    width: 75%;
    height: 75vh;
    opacity: 1;
    `
      : `
    animation: smooth 1s ease-in;
    opacity: 1;
    `}

  @keyframes smooth {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
