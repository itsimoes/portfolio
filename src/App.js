import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particle from "./components/Particle";
import AboutMe from "./components/AboutMe"; 
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
