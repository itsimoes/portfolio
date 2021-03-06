import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particle from "./components/Particle";
import AboutMe from "./components/AboutMe"; 
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Services />
      {/* <Experience /> */}
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
