import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/Project";

function App() {

  return (
    <>
     <Navbar />
     {/* <p className="pt-36">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo, aspernatur quia nemo minima quibusdam neque unde recusandae hic voluptates cumque quidem esse fugiat eius, dolore earum in eaque incidunt.</p>
      */}
      <HeroSection />
      <ProjectSection />
    </>
  );
}

export default App;
