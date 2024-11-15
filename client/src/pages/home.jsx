import React from 'react';
import Hero from '../components/homeHero';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <div className="hero-container min-h-screen flex flex-col justify-center">
      <NavBar />
      <Hero />
    </div>
  );
}
