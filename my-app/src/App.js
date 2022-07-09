// import logo from './logo.svg';
// import './App.css';
import arrow from "./arrow.svg";
import {
  LandingPage,
  Heading,
  Arrow,
  SmoothScrollLanding,
  SmoothScrollUp,
} from "./landing.style";
import { Page } from "./webpage.style";

function App() {
  return (
    <>
      <div id="landing">
        <SmoothScrollLanding href="#page">
          <LandingPage className="landing-page" id="landing">
            <Heading> e g a &nbsp; c h e u n g </Heading>
            <Arrow src={arrow} alt="arrow" />
          </LandingPage>
        </SmoothScrollLanding>
      </div>
      {/* <div id="page"> */}
      <Page id="page">
        <SmoothScrollUp href="#landing"></SmoothScrollUp>
      </Page>

      {/* </div> */}
    </>
  );
}

export default App;
