import styled from "styled-components";

export const LandingPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/img/elegant-monoline-floral.webp");
  background-size: 40%;
  background-repeat: repeat;
  filter: hue-rotate(240deg);
  opacity: 0.9;
`;

export const DarkModeLandingPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/img/elegant-monoline-floral.webp");
  filter: hue-rotate(150deg) invert(100%);
  opacity: 0.9;
`;

export const Heading = styled.h1`
  min-height: 75vh;
  min-width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  opacity: 0.8;
  font-size: 8vw;
`;

export const Subheading = styled.h2`
  color: black;
  opacity: .8;
  font-size: 2vw;
`;

export const Arrow = styled.img`
  position: absolute;
  height: 9vh;
  bottom: 1vh;
`;

// transform="translate(525 500) rotate(180)"
export const UpsideDownArrow = styled.img`
  translate: 525 500;
  rotate: 180;
  position: absolute;
  height: 9vh;
  bottom: 1vh;
`;