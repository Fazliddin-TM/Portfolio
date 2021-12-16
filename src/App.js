import React from "react";
import "./App.css";
import Home from "./home";
import About from "./about";
import Service from "./service";
import Project from "./project";
import Contact from "./contact";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
