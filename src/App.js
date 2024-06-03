import React from 'react';
import Features from './components/Features'; // Import the Features component
import Testimonials from './components/Testimonials'; // Create this component
import FAQ from './components/FAQ'
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from './context/Theme';
import Advantages from './components/Advantages';
const App = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">

      <ThemeProvider>
      <Header/>
      <Hero />
      <Features />
      <Advantages/>
      <Testimonials />
      <FAQ />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
