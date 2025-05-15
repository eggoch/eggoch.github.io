import styled from "styled-components";

export const PleaseClick = styled.text<{ isAnimating?: boolean }>`
  font-size: 26px;
  backgroundcolor: #000000;
  text-align: center;
  vertical-align: bottom;
`;

// position: absolute;
//   z-index: 1;
//   bottom: 10%;
//   font-size: 22px;
//   backgroundcolor: #000000;

//   ${(props) =>
//     props.isAnimating &&
//     `
//     animation: smooth 1s ease-in;
//     right: 7.5%;
//     `}

//   @keyframes smooth {
//     0% {
//       right: 0;
//     }
//     100% {
//       right: 7.5%;
//     }
//   }
