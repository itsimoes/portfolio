import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particle from "./components/Particle";
import AboutMe from "./components/AboutMe"; 

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
