import styled from 'styled-components';
 
 export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: peachpuff;
  opacity: 0.6;
`;

export const Wrapper = styled.div`
::-webkit-scrollbar {
  width: 50px;
  height: 8px;
  background-color: #aaa; /* or add it to the track */
}
`;