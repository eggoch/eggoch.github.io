import React, { useState, useEffect } from "react";
import "./App.css";
import { OpeningPage } from "./OpeningImages/OpeningPage";
import { images } from "./OpeningImages/OpeningImages";
import { NavBar } from "./NavBar/NavBar";
import { AboutMe } from "./AboutMe.tsx/AboutMe";

function App() {
  const [openingImgIndex, setOpeningImgIndex] = useState(0);
  const [isOnAbout, setIsOnAbout] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const imagesLength = images.length;
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (openingImgIndex !== imagesLength - 1) {
          setOpeningImgIndex(openingImgIndex + 1);
        } else {
          setIsAnimationComplete(true);
          console.log(isAnimationComplete)
        }
      },
      openingImgIndex > 5 ? 200 : 250,
    );
    return () => clearTimeout(timer);
  }, [imagesLength, openingImgIndex, setOpeningImgIndex, isAnimationComplete, setIsAnimationComplete]);

  return (
    // <Container style={{backgroundImage: "url(/globalResources/greenBackground.png)"}}>
    <>
      {/* Opening Page */}
      <OpeningPage
      isAnimationComplete = {isAnimationComplete}
      openingImgIndex={openingImgIndex}
      imagesLength={imagesLength}
      isOnAbout={isOnAbout}
      onClick={() => {window.location.href = "#about"}}
      />
      
      {/* About Me */}
      <AboutMe>
        <a id="about">
        <NavBar
          isNavBarOpen={isNavBarOpen}
          onClick={() => {
            setIsNavBarOpen(!isNavBarOpen);
          }}
        />
        </a>
      </AboutMe>
    </>
    // </Container>
  );
}

export default App;
