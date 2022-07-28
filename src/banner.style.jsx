import styled from "styled-components";

// export const Banner = styled.div`
//   min-width: 100vw;
//   height: 12.5vh;
//   top: 0;
//   background-image: url("/img/WomansRightQuiltjpg.jpg");
//   background-size: 100vw;
//   background-position-y: 15%;
// `;

export const Banner = styled.img`
  height: 100vh;
  width: 45vw;
  left: 0;
  object-fit: cover;
  opacity: .75
`;

export const BoxesWrapper = styled.div`
  height: 100vh;
  right: 0;
  display: flex;
  align-items: center;
`;

export const Boxes = styled.div`
  width: 55vw;
  display: grid;
  grid-template-columns: 22vw 22vw;
  grid-template-rows: 22vw 22vw;
  justify-content: center;
  align-items: center;
`;
// #F5C7B7
export const Box = styled.div`
  transition: opacity 1s;
  background-color: #F7D2AE;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #13628a;
  letter-spacing: 1.5vh;
  font-size: 1.75vw;
  text-shadow: .5vh .5vh #E19865;
  width: 20vw;
  height: 20vw;
  border: solid #855139;
  border-width: .5vh;
  opacity: .5;

  :hover{
    background-image: ${props => props.image};
    background-size: 30vw;
    background-position: 23vw;
    color: white;
    text-shadow: .5vh .5vh #6381B5;
    border: solid #13628a;
    border-width: .5vh;
    opacity: .8;
  }
`;

export const BoxContainer = styled.div`
  background-color: #FFE0C5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;