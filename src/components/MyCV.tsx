// src/components/MyCV.tsx
import React, { forwardRef } from "react";
import Header from "./Header";
import Summary from "./Summary";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Publications from "./Publications";
import Footer from "./Footer";

const MyCV = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="p-8 text-gray-800 bg-white">
      <Header />
      <Summary />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Publications />
      <Footer />
    </div>
  );
});

export default MyCV;
