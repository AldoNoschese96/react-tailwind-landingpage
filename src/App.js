import React from "react";
import HeroSection from "./Components/HeroSection";
import Jumbotron from "./Components/Jumbotron";

//Components
import Navbar from "./Components/Navbar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";
import SectionSix from "./Components/SectionSix";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Jumbotron />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Resources />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

export default App;
