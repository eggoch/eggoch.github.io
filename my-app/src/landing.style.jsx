import styled from 'styled-components';
 
 export const LandingPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/img/elegant-monoline-floral.webp');
  background-size: 40%;
  background-repeat: repeat;
  filter: hue-rotate(240deg) ;
  opacity: 0.9;
`;

export const DarkModeLandingPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/img/elegant-monoline-floral.webp');
  filter: hue-rotate(150deg) blur(0.75px) invert(100%);
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
  opacity: 0.8;
  align-items: center;
  justify-content: center;
  font-size: 8vw;
`; 