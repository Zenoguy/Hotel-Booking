import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Dining />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Location />
      <BookingCTA />
      <Footer />
    </div>
  );
}

export default App;
