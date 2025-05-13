import React, { useState, useEffect } from "react";
import "./App.css";
import { OpeningPage } from "./OpeningImages/OpeningPage";
import { images } from "./OpeningImages/OpeningImages";
import { NameTag } from "./OpeningImages/NameTag";
import { PleaseClick } from "./OpeningImages/PleaseClick";
import { ArrowDown } from "react-feather";
import { IconHolder } from "./OpeningImages/IconHolder";
import { Container } from "./Container";

function App() {
  const [openingImgIndex, setOpeningImgIndex] = useState(0);
  const [imagesCompleted, setImagesCompleted] = useState(false);
  const imagesLength = images.length - 1;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (openingImgIndex !== imagesLength) {
        setOpeningImgIndex(openingImgIndex + 1);
      } else {
        setImagesCompleted(true);
      }
    }, openingImgIndex > 5 ? 150: 300);
    return () => clearTimeout(timer);
  }, [imagesLength, openingImgIndex, setOpeningImgIndex]);

  return (
    <Container>
      {/* <img src={"./globalResources/greenBackground.png"} alt="green background"/> */}
      <>
        <OpeningPage src={images[openingImgIndex]} />
        {imagesCompleted && (
          <>
          <NameTag
            src="./globalResources/nameTag.png"
            alt='newspaper clippings of individual letters spelling out "Ega Cheung"'
            isTransitioning={false}
          />

          <>
          <PleaseClick>
            please click anywhere
          </PleaseClick>
          <IconHolder>
          <ArrowDown style={{position: "absolute", right: '5%', bottom: '10%'}}/>
          </IconHolder>
          </>
          </>
         )} 
      </>
    </Container>
  );
}

export default App;
