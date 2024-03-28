// https://learnwith-zaid.vercel.app/#roadmap

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Reaserch from "./components/Research/Research";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollup/ScrollUp";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Reaserch />
      <Project />
      <Contact />
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default App;
