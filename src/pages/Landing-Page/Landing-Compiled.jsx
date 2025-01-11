import './Landing.css';
import './Intro/Landing-Intro.jsx';
import './Main/Landing-Main.jsx';

function Landing() {
  return (
    <div className="Landing">
      <LandingIntro />
      <LandingMain />
    </div>
  );
}

export default Landing;