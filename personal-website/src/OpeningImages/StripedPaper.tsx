import styled from "styled-components";

export const StripedPaper = styled.img<{ isTransitioning: boolean }>`
  position: relative;
  top: 77.5%;
  left: 37.55%;
  z-index: 1;

  ${(props) =>
    props.isTransitioning
      ? `
    animation: toAbout 2.5s ease-in;
    top: -11.5%;
    left: -30.25%;
    transform: scale(1.1);
    opacity: 0;
    `
      : `transform: rotate(76deg) scale(2.2);`}

  @keyframes toAbout {
    0% {
      opacity: 1;
      top: 77.5%;
      left: 37.55%;
      transform: rotate(76deg) scale(2.2);
    }
    50% {
      opacity: 1;
      top: -11.5%;
      left: -30.25%;
      transform: scale(1.1);
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
