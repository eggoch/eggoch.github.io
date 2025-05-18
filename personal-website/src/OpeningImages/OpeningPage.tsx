import styled from "styled-components";
import React from "react";
import { images } from "./OpeningImages";
import { NameTag } from "./NameTag";
import { PleaseClick } from "./PleaseClick";
import { ArrowDown } from "react-feather";
import { PleaseWrapper } from "./PleaseWrapper";
import { StripedPaper } from "./StripedPaper";
import { PaperUnravelling } from "./PaperUnravelling";

export const OpeningPageWrapper = styled.div<{
  isAnimationComplete: boolean;
  isOnAbout: boolean;
}>`
  position: ${(props) => (props.isAnimationComplete ? "sticky" : `relative`)};
  width: 100%;
  height: 100vh;
  background-image: url("/globalResources/greenBackground.png");
  z-index: 1;
  overflow: hidden;

  ${(props) =>
    props.isAnimationComplete &&
    !props.isOnAbout &&
    `:hover {
      cursor: pointer;
    }`}
`;

interface OpeningPageProps {
  isAnimationComplete: boolean;
  openingImgIndex: number;
  imagesLength: number;
  isOnAbout: boolean;
  onClick: () => void | null;
}

export const OpeningPage: React.FC<OpeningPageProps> = ({
  isAnimationComplete,
  openingImgIndex,
  imagesLength,
  isOnAbout,
  onClick,
}) => {
  return (
    <OpeningPageWrapper
      onClick={onClick}
      isAnimationComplete={isAnimationComplete}
      isOnAbout={isOnAbout}
      id="home"
    >
      {openingImgIndex < imagesLength - 1 ? (
        <PaperUnravelling
          src={images[openingImgIndex]}
          alt="crumpled paper unravelling"
        />
      ) : (
        <>
          <StripedPaper
            src="./globalResources/stripedPaper.png"
            alt="striped piece of paper"
            isTransitioning={isOnAbout}
          />
          <NameTag
            src="./globalResources/nameTag.png"
            alt='newspaper clippings of individual letters spelling out "Ega Cheung"'
            isTransitioning={isOnAbout}
          />
          <PleaseWrapper isAnimating={true} isTransitioning={isOnAbout}>
            <PleaseClick>please click anywhere</PleaseClick>
            <ArrowDown />
          </PleaseWrapper>
        </>
      )}
    </OpeningPageWrapper>
  );
};
