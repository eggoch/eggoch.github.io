import styled from "styled-components";

export const StripedPaper = styled.img<{ isTransitioning: boolean }>`
  position: relative;
  top: 77.5%;
  left: 37.55%;
  z-index: 1;

  ${(props) =>
    props.isTransitioning
      ? `
    animation: toAbout 1.25s ease-in;
    top: -5%;
    left: -31.5%;
    transform: scale(1.1);
    `
      : `transform: rotate(76deg) scale(2.2);`}

  @keyframes toAbout {
    0% {
      top: 77.5%;
      left: 37.55%;
      transform: rotate(76deg) scale(2.2);
    }
    100% {
      top: -5%;
      left: -31.5%;
      transform: scale(1.1);
    }
  }
`;
