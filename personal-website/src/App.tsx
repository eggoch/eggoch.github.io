import React, { useState, useEffect } from "react";
import "./App.css";
import { OpeningPage } from "./OpeningImages/OpeningPage";
import { images } from "./OpeningImages/OpeningImages";
import { NameTag } from "./OpeningImages/NameTag";
import { PleaseClick } from "./OpeningImages/PleaseClick";
import { ArrowDown } from "react-feather";
import { PleaseWrapper } from "./OpeningImages/PleaseWrapper";
import { Container } from "./Container";
import { StripedPaper } from "./OpeningImages/StripedPaper";
import { GreenBackground } from "./OpeningImages/GreenBackground";
import { PaperUnravelling } from "./OpeningImages/PaperUnravelling";
import { NavBar } from "./NavBar/NavBar";
import { AboutMe } from "./AboutMe.tsx/AboutMe";

function App() {
  const [openingImgIndex, setOpeningImgIndex] = useState(0);
  const [isOnAbout, setIsOnAbout] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  // const [animationComplete, setAnimationComplete] = useState(false);

  const imagesLength = images.length;
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (openingImgIndex !== imagesLength - 1) {
          setOpeningImgIndex(openingImgIndex + 1);
        } else {
        }
      },
      openingImgIndex > 5 ? 200 : 250,
    );
    return () => clearTimeout(timer);
  }, [imagesLength, openingImgIndex, setOpeningImgIndex]);

  return (
    // <Container style={{backgroundImage: "url(/globalResources/greenBackground.png)"}}>
    <>
      {/* Opening Page */}
      <OpeningPage>
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
            />
            <NameTag
              src="./globalResources/nameTag.png"
              alt='newspaper clippings of individual letters spelling out "Ega Cheung"'
              isTransitioning={isOnAbout}
            />
            <PleaseWrapper isAnimating={true}>
              <PleaseClick>please click anywhere</PleaseClick>
              <ArrowDown />
            </PleaseWrapper>
          </>
        )}
      </OpeningPage>

      {/* About Me */}
      <AboutMe>
        <NavBar
          isNavBarOpen={isNavBarOpen}
          onClick={() => {
            setIsNavBarOpen(!isNavBarOpen);
          }}
        />
      </AboutMe>
    </>
    // </Container>
  );
}

export default App;
