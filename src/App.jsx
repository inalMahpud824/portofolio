import { useEffect } from "react";
import "./App.css";
import ContactSection from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/Project";
import { Helmet } from "react-helmet";

function App() {
useEffect(() => {
  const element = document.querySelector('html');
  element.classList.add('scroll-smooth');
}, [])

  return (
    <>
      <Helmet>
        <title>Inal Mahpud - Portfolio</title>
        <meta
          name="description"
          content="Inal Mahpud's portfolio showcasing projects and skills in frontend and backend development."
        />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default App;
