// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { useState } from "react";
// // import "./App.css";
// // import { Header } from "./components/Header";
// // import { Hero } from "./components/Hero";
// // import { Gallery } from "./components/Gallery";
// // import { About } from "./components/About";
// // import BlogSection from "./components/BlogSection";
// // import FAQSection from "./components/FAQSection";
// // import Footer2 from "./components/Footer2";
// // import Features from "./components/Features";
// // import { Team } from "./components/Team";

// // function App() {
// //   return (
// //     <Router>
// //       <Header />
// //       <Hero />
// //       <About />
// //       <Features />
// //       <Gallery />
// //       <Team />
// //       <BlogSection />
// //       <FAQSection />
// //       <Routes>
// //         <Route path="/" element={<Hero />} />
// //         <Route path="/features" element={<Features />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/gallery" element={<Gallery />} />
// //         <Route path="/team" element={<Team />} />
// //         <Route path="/blog" element={<BlogSection />} />
// //         <Route path="/faq" element={<FAQSection />} />
// //       </Routes>
// //       <Footer2 />
// //     </Router>
// //   );
// // }

// // export default App;

// // 2nd try

// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import "./App.css";
// // import { Header } from "./components/Header";
// // import { Hero } from "./components/Hero";
// // import { Gallery } from "./components/Gallery";
// // import { About } from "./components/About";
// // import BlogSection from "./components/LatestPostPreview";
// // import FAQSection from "./components/FAQSection";
// // import Footer2 from "./components/Footer2";
// // import Features from "./components/Features";
// // import { Team } from "./components/Team";

// // function App() {
// //   return (
// //     <Router>
// //       {/* Header always visible */}
// //       <Header />

// //       {/* Dynamic Routes */}
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <>
// //               <Hero />
// //               <About />
// //               <Features />
// //               <Gallery />
// //               <Team />
// //               <BlogSection />
// //               <FAQSection />
// //             </>
// //           }
// //         />
// //         <Route path="/features" element={<Features />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/gallery" element={<Gallery />} />
// //         <Route path="/team" element={<Team />} />
// //         <Route path="/blog" element={<BlogSection />} />
// //         <Route path="/faq" element={<FAQSection />} />
// //       </Routes>

// //       {/* Footer always visible */}
// //       <Footer2 />
// //     </Router>
// //   );
// // }

// // export default App;


// // 3rd try

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { Gallery } from "./components/Gallery";
// import { About } from "./components/About";
// import BlogIndex from "./features/Blogs/BlogIndex.jsx";
// import FAQSection from "./components/FAQSection";
// import Footer2 from "./components/Footer2";
// import Features from "./components/Features";
// import LatestPostPreview from "./components/LatestPostPreview"
// import { Team } from "./components/Team";
// import { Helmet } from 'react-helmet';  // SEO improvement
// import NotFound from './components/NotFound'; // Add a NotFound component


// function App() {
//   return (
//     <Router>
//       {/* Header always visible */}
//       <Header />

//       {/* SEO: Manage the title and meta tags */}
//       <Helmet>
//         <title>Home - My Awesome Site</title>
//         <meta name="description" content="Explore our site with various features like blogs, gallery, and team." />
//       </Helmet>

//       {/* Dynamic Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Features />
//               <Gallery />
//               <LatestPostPreview />
//               <Team />
//               <BlogIndex />
//               <FAQSection />
//             </>
//           }
//         />
//         <Route path="/features" element={<Features />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/blog" element={<BlogIndex />} />
//         <Route path="/faq" element={<FAQSection />} />
        
//         {/* Fallback route for 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer2 />
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { Gallery } from "./components/Gallery";
// import { About } from "./components/About";
// import BlogIndex from "./features/Blogs/BlogIndex.jsx";
// import FAQSection from "./components/FAQSection";
// import Footer2 from "./components/Footer2";
// import Features from "./components/Features";
// import LatestPostPreview from "./components/LatestPostPreview";
// import { Team } from "./components/Team";
// import { Helmet } from 'react-helmet'; // SEO improvement
// import NotFound from './components/NotFound'; // Add a NotFound component
// import MoreGallery from './moregallery/moreGallery.jsx'; // Import the MoreGallery component
// import RegistrationForm from './registrationForm/registrationForm.jsx' // Import the RegistrationForm component

// function App() {
//   return (
//     <Router>
//       {/* Header always visible */}
//       <Header />

//       {/* SEO: Manage the title and meta tags */}
//       <Helmet>
//         <title>Home - My Awesome Site</title>
//         <meta name="description" content="Explore our site with various features like blogs, gallery, and team." />
//       </Helmet>

//       {/* Dynamic Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Features />
//               <Gallery />
//               <LatestPostPreview />
//               <Team />
//               <BlogIndex />
//               <FAQSection />
//             </>
//           }
//         />
//         <Route path="/features" element={<Features />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/blog" element={<BlogIndex />} />
//         <Route path="/faq" element={<FAQSection />} />
//         <Route path="/moregallery" element={<MoreGallery />} /> {/* MoreGallery route */}
//         <Route path="/reg" element={<RegistrationForm />} /> {/* Add the /reg route for registration */}

//         {/* Fallback route for 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer2 />
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { Gallery } from "./components/Gallery";
// import { About } from "./components/About";
// import BlogIndex from "./features/Blogs/BlogIndex.jsx";
// import FAQSection from "./components/FAQSection";
// import Footer2 from "./components/Footer2";
// import Features from "./components/Features";
// import LatestPostPreview from "./components/LatestPostPreview";
// import { Team } from "./components/Team";
// import { Helmet } from 'react-helmet'; // SEO improvement
// import NotFound from './components/NotFound'; // Add a NotFound component
// import MoreGallery from './moregallery/moreGallery.jsx'; // Import the MoreGallery component
// import RegistrationForm from './registrationForm/RegistrationForm.jsx'; // Correct casing
// import KnowMorePage from './components/KnowMore.jsx'; // Import KnowMorePage component

// function App() {
//   return (
//     <Router>
//       {/* Header always visible */}
//       <Header />

//       {/* SEO: Manage the title and meta tags */}
//       <Helmet>
//         <title>Home - My Awesome Site</title>
//         <meta name="description" content="Explore our site with various features like blogs, gallery, and team." />
//       </Helmet>

//       {/* Dynamic Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Features />
//               <Gallery />
//               <LatestPostPreview />
//               <Team />
//               {/* <BlogIndex /> */}
//               <FAQSection />
//             </>
//           }
//         />
//         <Route path="/features" element={<Features />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team" element={<Team />} />
//         {/* <Route path="/blog" element={<BlogIndex />} /> */}
//         <Route path="/faq" element={<FAQSection />} />
//         <Route path="/moregallery" element={<MoreGallery />} /> {/* MoreGallery route */}
//         <Route path="/reg" element={<RegistrationForm />} /> {/* Registration Form route */}
//         <Route path="/knowmore" element={<KnowMorePage />} /> {/* Know More route */}

//         {/* Fallback route for 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {/* Footer always visible */}
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
import BlogIndex from "./features/Blogs/BlogIndex.jsx";
import FAQSection from "./components/FAQSection";
import Footer2 from "./components/Footer2";
import Features from "./components/Features";
import LatestPostPreview from "./components/LatestPostPreview";
import { Team } from "./components/Team";
import { Helmet } from "react-helmet"; // SEO improvement
import NotFound from "./components/NotFound"; // 404 component
import MoreGallery from "./moregallery/moreGallery.jsx"; // Gallery component
import RegistrationForm from "./registrationForm/RegistrationForm.jsx"; // Registration form component
import KnowMorePage from "./components/KnowMore.jsx"; // KnowMorePage component

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      {/* SEO: Manage the title and meta tags */}
      <Helmet>
        <title>Home - My Awesome Site</title>
        <meta
          name="description"
          content="Explore our site with various features like blogs, gallery, and team."
        />
      </Helmet>

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
              <LatestPostPreview />
              <Team />
              {/* <BlogIndex /> */}
              <FAQSection />
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/blog" element={<BlogIndex />} /> */}
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/moregallery" element={<MoreGallery />} />
        <Route path="/reg" element={<RegistrationForm />} />
        <Route path="/knowmore" element={<KnowMorePage />} /> {/* Know More route */}

        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer always visible */}
      <Footer2 />
    </Router>
  );
}

export default App;
