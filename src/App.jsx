// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/MyContent'; // Assuming About is MyContent
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyContent from './components/MyContent'; // Import your new component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />

            {/* MyContent Route */}
            <Route path="/mycontent" element={<MyContent />} />

            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;