import { images } from "./OpeningImages";
import styled from "styled-components";

export const OpeningPage = styled.img`
  width: 100%;
  height: 100vh;
`;

OpeningPage.defaultProps = {
  src: images[0],
};
