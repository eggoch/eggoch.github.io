// import logo from './logo.svg';
// import './App.css';
import arrow from "./arrow.svg";
import { LandingPage, Heading, Arrow, SmoothScroll } from "./landing.style";
import { Page, } from "./webpage.style";

function App() {
  return (
    <>
      <div id="landing">
        <SmoothScroll href="#page">
          <LandingPage className="landing-page" id="landing">
            <Heading> e g a &nbsp; c h e u n g </Heading>
            <Arrow src={arrow} alt="arrow" />
          </LandingPage>
        </SmoothScroll>
      </div>
      <div id="page">
        <SmoothScroll href="#landing">
          <Page></Page>
        </SmoothScroll>
      </div>
    </>
  );
}

export default App;
