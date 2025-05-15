import { images } from "./OpeningImages";
import styled from "styled-components";

export const PaperUnravelling = styled.img`
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

PaperUnravelling.defaultProps = {
  src: images[0],
};
