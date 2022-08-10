import React, { useState } from "react";
import arrow from "./arrow.svg";
import { Banner, Box, Boxes, BoxesWrapper, BoxContainer } from "./banner.style";
import { LandingPage, Heading, Subheading, Arrow } from "./landing.style";
import {
  ScrollLanding,
  // ScrollUp
} from "./scroll.style";
import {
  // Corridor,
  Page,
} from "./webpage.style";

const content = ["about me", "skills", "résumé", "credit"];
const contentLinks = [
  'url("/img/The Bridge at Villeneuve-la-Garenne.jpg")',
  'url("/img/the road from moret to saint-mammes alfred sisley.jpg")',
  'url("/img/view of marly-le-roi from coeur-volant alfred sisley.jpg")',
  'url("/img/sahurs meadows in morning sun alfred sisley.jpg")',
];

function App() {
  const [landing, setLanding] = useState(true);
  const [page, setPage] = useState(false);
  const [about, setAbout] = useState(false);
  const [background, setBackground] = useState(true);

  return (
    <>
      {landing && (
        <ScrollLanding
          id="landing"
          href="#page"
          onClick={() => {
            setPage(true);
            setTimeout(() => {
              setLanding(false);
            }, 750);
          }}
        >
          <LandingPage className="landing-page">
            <Heading>
              {" "}
              e g a &nbsp; c h e u n g
              <Subheading>
                {" "}
                p l e a s e &nbsp; c l i c k &nbsp; a n y w h e r e{" "}
              </Subheading>
            </Heading>
            <Arrow tabIndex={-1} src={arrow} alt="arrow" />
          </LandingPage>
        </ScrollLanding>
      )}

      {page && (
        <Page id="page">
          {/* <ScrollUp href="#landing"> */}
          <Banner src="/img/WomansRightQuiltjpg.jpg" />
          {/* <Corridor src="/img/corridor.jpg"/> */}
          {/* </ScrollUp> */}
          <BoxesWrapper>
            <Boxes>
              {content.map((item, index) => {
                return (
                  <BoxContainer
                    href="#music"
                    onClick={() => {
                      setAbout(true);
                      setTimeout(() => {
                        setPage(false);
                      }, 750);
                    }}
                  >
                    <Box image={contentLinks[index]}>{item}</Box>
                  </BoxContainer>
                );
              })}
            </Boxes>
          </BoxesWrapper>
        </Page>
      )}
      {about && (
        <Page id="music" 
        style={{backgroundImage: background ? "": "url(https://wallpaperaccess.com/full/7290435.jpg)"}}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              background: "#e0b392",
              width: "100vw",
              height: "10vh",
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
              fontSize: "6.5vh",
              color: "grey",
            }}
          >
            m u s i c
          </div>

          <iframe
            src="https://www.soundslice.com/slices/n1dkc/embed/"
            title="song"
            style={{
              width: "80vw",
              height: "80vh",
              marginLeft: "10vw",
              marginTop: "15vh",
            }}
            onMouseOver={() => {
              setTimeout( ()=> {
                setBackground(false);
              }, 18500
              )}
            }
          ></iframe>
        </Page>
      )}
    </>
  );
}

export default App;
