import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import OurMission from "./components/OurMission";
import Partners from "./components/Partners";
import OurLogo from "./components/OurLogo";
import Whatwedo from "./components/Whatwedo";
import Howitworks from "./components/Howitworks";
import Team from "./components/Team";
import Faq from "./components/Faq";
import MyFooter from "./components/MyFooter";


function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <OurMission />
      <Partners/>
      <OurLogo />
      <Whatwedo />
      <Howitworks />
      <Team />
      <Faq />
      <MyFooter/>
      
    </>
  );
}

export default App;
