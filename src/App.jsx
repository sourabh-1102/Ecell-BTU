// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { Gallery } from "./components/Gallery";
// import { About } from "./components/About";
// import BlogSection from "./components/BlogSection";
// import FAQSection from "./components/FAQSection";
// import Footer2 from "./components/Footer2";
// import Features from "./components/Features";
// import { Team } from "./components/Team";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Hero />
//       <About />
//       <Features />
//       <Gallery />
//       <Team />
//       <BlogSection />
//       <FAQSection />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/blog" element={<BlogSection />} />
//         <Route path="/faq" element={<FAQSection />} />
//       </Routes>
//       <Footer2 />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import Footer2 from "./components/Footer2";
import Features from "./components/Features";
import { Team } from "./components/Team";

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      {/* Dynamic Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Features />
              <Gallery />
              <Team />
              <BlogSection />
              <FAQSection />
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/faq" element={<FAQSection />} />
      </Routes>

      {/* Footer always visible */}
      <Footer2 />
    </Router>
  );
}

export default App;