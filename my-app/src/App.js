// import logo from './logo.svg';
// import './App.css';
import arrow from './arrow.svg';
import { LandingPage, Heading, Arrow } from './landing.style';
import { Page, Wrapper } from './webpage.style';

function App() {
  return (
    <Wrapper>
    <LandingPage className="landing-page">
      <Heading> e g a &nbsp; c h e u n g </Heading>
      <Arrow src={arrow} alt="arrow"/>
    </LandingPage>
    <Page>
      
    </Page>
    </Wrapper>
  );
}

export default App;
