import styled from "styled-components";

export const NameTag = styled.img<{ isTransitioning?: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  left: 0;

  ${(props) =>
    props.isTransitioning &&
    `
    transform: rotate(45deg);
    `}
`;
