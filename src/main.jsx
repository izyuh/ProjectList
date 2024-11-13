import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./main.css";

import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from './Skills/Skills'
import Projects from "./Projects/Projects";
import Footer from './Footer/Footer'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </StrictMode>
);
